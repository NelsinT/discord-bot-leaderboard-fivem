const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const mysql = require('mysql2/promise');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

let leaderboardMessageId = null;
const leaderboardFile = "leaderboard.json";
const tableName = process.env.DB_TABLE;
const categories = process.env.DB_COLUMNS.split(",");

function loadLeaderboardMessageId() {
    if (fs.existsSync(leaderboardFile)) {
        try {
            const data = JSON.parse(fs.readFileSync(leaderboardFile));
            leaderboardMessageId = data.messageId;
        } catch (error) {
            console.error("Error loading message ID:", error);
        }
    }
}

function saveLeaderboardMessageId(messageId) {
    fs.writeFileSync(leaderboardFile, JSON.stringify({ messageId }));
}

loadLeaderboardMessageId();

async function getTopKillsByCategory(category) {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        const [rows] = await connection.execute(
            `SELECT identifier, ${category} FROM ${tableName} ORDER BY ${category} DESC LIMIT 3`
        );

        await connection.end();

        if (rows.length === 0) return null;

        let embed = new EmbedBuilder()
            .setTitle(`🏆 TOP 3 Kills - ${category.replace("kills_", "").toUpperCase()}`)
            .setColor(0xffd700);

        rows.forEach((row, index) => {
            embed.addFields({ name: `#${index + 1} - ${row.identifier}`, value: `${row[category]} kills`, inline: true });
        });

        return embed;
    } catch (error) {
        console.error(`Error querying the database (${category}):`, error);
        return;
    }
}

client.on('ready', async () => {
    console.log(`✅ Bot ${client.user.tag} is online!`);

    try {
        const channel = await client.channels.fetch(process.env.CHANNEL_ID);
        if (!channel) {
            console.error("❌ Channel not found. Check if the ID is correct.");
            return;
        }

        const updateLeaderboard = async () => {
            let embeds = [];

            for (const category of categories) {
                const embed = await getTopKillsByCategory(category);
                if (embed) embeds.push(embed);
            }

            try {
                if (leaderboardMessageId) {
                    const message = await channel.messages.fetch(leaderboardMessageId);
                    await message.edit({ embeds: embeds });
                } else {
                    const newMessage = await channel.send({ embeds: embeds });
                    leaderboardMessageId = newMessage.id;
                    saveLeaderboardMessageId(newMessage.id);
                }
            } catch (error) {
                console.error("❌ Error editing/sending message:", error);
            }
        };

        await updateLeaderboard();
        setInterval(updateLeaderboard, 3600000);

    } catch (error) {
        console.error("Error fetching the channel:", error);
    }
});

client.login(process.env.DISCORD_TOKEN);