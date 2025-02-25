🚀 Discord Bot Leaderboard 🏆

Welcome to the Discord Bot Leaderboard! This bot connects to a MySQL database and dynamically updates a leaderboard in a Discord channel. Stay ahead of the competition and keep track of the top players in real-time!

✨ Features

✅ Fetches leaderboard stats directly from a MySQL database✅ Displays Top 3 players for each category in an interactive embed✅ Automatically updates the leaderboard at set intervals✅ Simple and lightweight for seamless performance

📌 Requirements

🔹 Node.js🔹 A MySQL database🔹 A Discord bot token🔹 A .env file (must be named exactly .env) with necessary credentials

⚡ Installation

1️⃣ Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install dependencies:

npm install

3️⃣ Create a .env file and configure it:

DISCORD_TOKEN=your_token_here
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
CHANNEL_ID=channel_id
DB_TABLE=ffa
DB_COLUMNS=kills_deagle,kills_rifle,kills_smg,kills_all

🔹 Note: The .env file should have no specific name, it must simply be called .env.

4️⃣ Run the bot:

node bot.js

🎮 Usage

Ensure your MySQL database is properly set up and accessible.

Invite the bot to your Discord server and grant necessary permissions.

The bot will fetch & update the leaderboard in the specified channel automatically.

⚙️ Configuration

Customize settings in the .env file to adjust database credentials, leaderboard table, and update intervals.

📜 License

This project is licensed under the MIT License.

🤝 Contributing

Want to make this bot even better? Feel free to fork the repository and submit pull requests!

🛠 Issues & Support

If you encounter any problems, open an issue on GitHub, and we'll be happy to help!

🚀 Let’s build an awesome leaderboard together! 🎯
