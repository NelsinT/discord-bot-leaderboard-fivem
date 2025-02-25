LEADERBOARD 📢

This bot displays a kill ranking for different categories in a Discord channel, using data from a MySQL database.

Requirements

Node.js (latest version recommended)

A bot configured in the Discord Developer Portal

A configured MySQL database

Installation and Setup

1. Clone the Repository

git clone https://github.com/your-username/your-repository.git
cd your-repository

2. Install Dependencies

npm install

3. Configure the .env File

Create a .env file in the root directory and fill it with your bot and database credentials:

DISCORD_TOKEN=your_token_here
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
CHANNEL_ID=channel_id

4. Run the Bot

node bot.js

The bot will start and automatically update the leaderboard every hour.

Features

Displays the kill ranking for different categories (Deagle, Rifle, SMG, All)

Automatic leaderboard updates

Contact

If you have any questions or need help, open an issue in the repository.
