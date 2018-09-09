Welcome to Ngo Bot
==================
This bot was originally created to address the hassle of manually deleting commands and responses related to FredBoat, a popular Discord music bot. The ultimate goal of this bot is to provide extended administrator privileges for Discord server hosts.

How it was made
---------------
This bot was made using Node.js. To make Node.js work with the Discord API, I used Discord.js, a powerful Node.js module that allows you to interact with the Discord API very easily. Find out more [about Discord.js](https://discord.js.org/).

The code is being hosted live on Glitch. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you. Find out more [about Glitch](https://glitch.com/about).

Current functionalities
-----------------------
In the main server channel, this bot automatically removes any messages after 60 seconds that satisfy either of these criteria:
- Any message from a bot
- Any message that starts with ';;' (the default FredBoat command syntax)


Future plans
------------
I want to create a tool that grants Discord server administrators access to extended user logs. For example, I want administrators to be able to see when users last joined the voice call.
