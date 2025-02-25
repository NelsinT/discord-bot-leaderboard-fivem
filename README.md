Discord Bot Leaderboard

This is a Discord bot that fetches and displays a leaderboard from a MySQL database. The bot periodically updates the leaderboard message in a specified channel.

Features

Connects to a MySQL database to fetch leaderboard stats.

Displays top 3 players for each category in an embedded message.

Automatically updates the leaderboard at set intervals.

Requirements

Node.js

A MySQL database

A Discord bot token

A .env file (without a specific name) with the necessary credentials

Installation

Clone this repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:

npm install

Create a .env file in the root directory and configure it:

DISCORD_TOKEN=your_token_here
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
CHANNEL_ID=channel_id
DB_TABLE=ffa
DB_COLUMNS=kills_deagle,kills_rifle,kills_smg,kills_all

Note: The .env file should not have a specific name; it must simply be named .env.

Run the bot:

node bot.js

Usage

Ensure your MySQL database is set up and accessible.

Invite the bot to your Discord server and give it necessary permissions.

The bot will fetch and update the leaderboard in the specified channel automatically.

Configuration

Modify the .env file to adjust settings such as the database credentials, leaderboard table, and update intervals.

License

This project is licensed under the MIT License.

Contributing

Feel free to fork the repository and submit pull requests.

Issues

If you encounter any problems, open an issue on GitHub.
