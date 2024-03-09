# Wick Server Status Discord Bot

Wick Server Status is a Discord bot that provides real-time updates on server statistics, including member count, channel information, and more. This bot is designed to help server administrators and users keep track of important server metrics effortlessly.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Translations](#translations)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Real-time server status updates
- Customizable display options for various metrics
- Multilingual support with easy translation management
- Error handling for a robust user experience
- Easy-to-use configuration file for quick setup

## Installation
1. Clone the repository to your local machine :

```bash
git clone https://github.com/wickstudio/server-status-bot.git
```

2. Install dependencies :

```bash
cd wick-server-status-bot
npm install
```

3. Set up your Discord bot on the [Discord Developer Portal](https://discord.com/developers/applications).

4. Configure the bot by editing the `config.js` file.

5. Run the bot:

```bash
node index.js
```

## Configuration
The `config.js` file contains all the necessary configurations for the bot. Customize the settings to suit your server's needs:

- `token`: Your Discord bot token obtained from the Discord Developer Portal.
- `serverId`: The ID of the Discord server where the bot will operate.
- `textChannelId`: The ID of the text channel where the bot will send updates.
- ... (add other configurations based on your requirements)

## Translations
The bot supports multilingual translations for a better user experience. To add translations :

1. Create a new translation file in the `translations` directory (e.g., `ar.json` for Arabic).
2. Add translations for each key in the desired language.
3. Update the `language` parameter in the `config.js` file.

## Usage
Once the bot is set up and running, use the following command in your Discord server:

```bash
!status
```

Customize the command prefix and other settings in the `config.js` file.

## Contributing
If you'd like to contribute to the development of Wick Server Status, please follow these steps :

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact

- Email : info@wickdev.xyz

- Website : https://wickdev.xyz

- Discord : https://discord.gg/wicks

- Youtube : https://www.youtube.com/@wick_studio