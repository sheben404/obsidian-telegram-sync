# Telegram Sync for Obsidian (Fork)

<a href="https://github.com/sheben404/obsidian-telegram-sync/releases/latest">
<img src="https://img.shields.io/github/v/release/sheben404/obsidian-telegram-sync?label=plugin&display_name=tag&logo=obsidian&color=purple&logoColor=violet">
</a>&nbsp;<a href="https://github.com/sheben404/obsidian-telegram-sync">
<img src="https://img.shields.io/github/downloads/sheben404/obsidian-telegram-sync/total?logo=github">
</a><br><br>

> This is a fork of [soberhacker/obsidian-telegram-sync](https://github.com/soberhacker/obsidian-telegram-sync), which appears to be no longer actively maintained. This fork includes additional fixes and features:
>
> - **Proxy URL support** — configure a proxy for bot connections
> - **Media embed fix** — media files are now correctly embedded with `!` prefix in markdown links

Transfer messages and files from [Telegram](https://telegram.org/) to your [Obsidian](https://obsidian.md/plugins?id=telegram-sync) vault. You can easily save text, voice transcripts, images, and other files from your Telegram chats to Obsidian for further processing and organization. This plugin is only available for desktops and would never be available on mobile platforms.

<img width="469" alt="image" src="https://github.com/soberhacker/obsidian-telegram-sync/assets/128756825/65f84775-8cb4-4a45-811b-296b87e2b52d"> <img width="438" alt="image" src="https://github.com/soberhacker/obsidian-telegram-sync/assets/128756825/e50c6e5a-b9d6-4995-8538-d4095d6966f2">

---

## 📚 Table of Contents

-   [Features](#-features)
-   [Installation](#-installation)
-   [Usage](#-usage)
-   [Contributing](#-contributing)
-   [Credits](#-credits)

## 🚀 Features

-   Synchronize text messages and files
-   Save messages as individual notes or append to an existing note
-   Transcript voices and video notes (for Telegram Premium subscribers only)
-   Use customizable templates for new notes
-   Set folders for new notes and files
-   Automatically format text messages with markdown
-   Delete processed messages from Telegram

## 📦 Installation

### Via BRAT (recommended)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin from Obsidian community plugins
2. Open BRAT settings, click "Add Beta Plugin"
3. Enter `sheben404/obsidian-telegram-sync`
4. BRAT will auto-install and keep the plugin updated

### Manual Installation

1. Download main.js, styles.css, manifest.json from the [latest release](https://github.com/sheben404/obsidian-telegram-sync/releases/latest)
2. Copy the downloaded files to `<path-to-your-vault>/.obsidian/plugins/telegram-sync/`
3. Restart Obsidian and enable **Telegram Sync** in the Community plugins tab

## 📮 Usage

1. Create a new bot on Telegram by talking to the [@botFather](https://t.me/botfather)
2. Copy the bot token provided by the @botFather
3. Open the Obsidian settings and navigate to the **Telegram Sync** settings tab
4. Paste your bot token to **Bot > Connect > Bot Token** field
5. Configure the remaining settings according to your preferences
6. Start sending messages and files to your Telegram bot
7. When the Obsidian app is running on your laptop or PC, it syncs all your messages
8. You can optionally add your bot to any chats that you want to sync (the bot needs admin rights)

## 💻 Contributing

If you're thinking about contributing, please check out the [Contributing Guide](./CONTRIBUTING.md) first.

## 🙏 Credits

This project is forked from [soberhacker/obsidian-telegram-sync](https://github.com/soberhacker/obsidian-telegram-sync). Thanks to the original author and all contributors.
