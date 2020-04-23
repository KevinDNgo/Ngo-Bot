// server.js
// where your node app starts
// init project
const http = require('http');
const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
/*
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1};

const config = require('./config.json');
const search = require('youtube-search');
const opts = {
    maxResults: 5,
    key: config.YOUTUBE_API,
    type: 'video'
};
*/
 // http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

 // http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

 // listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

 app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

//app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

 // Confirms client is working on developer end
client.on('ready', () => {
    console.log('Ready!');
});

 // Checks if message is music bot command or response, and deletes it
client.on('message', message => {
    /*
    if(message.content.toLowerCase().startsWith("?play")) {
        let voiceChannel = message.guild.channels.find(channel => channel.id === '133104742254510080');
        if(voiceChannel != null) {
            console.log(voiceChannel.name + ' was found and is a ' + voiceChannel.type + ' channel.');
            voiceChannel.join()
            .then(connection => {
                console.log('NgoBot joined the channel.');
                const stream = ydtl('https://www.youtube.com/watch?v=MUINFs1Sp94', { filter : 'audioonly' });
                const dispatcher = connection.playStream(stream, streamOptions);
            })
            .catch();
        }
    }
    */
    // bigmoist
    if(message.channel.id === '133104742254510080') {
        // Cockbot
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of error response for readability
            else if(message.content.indexOf('Error occurred when loading') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            else {
                message.delete({ timeout: 10000 })
                .catch(console.error);
            }
        }
        // Groovy Bot
        if(message.author.id === '234395307759108106') {
            message.delete({ timeout: 15000 })
            .catch(console.error);
        }
        if(message.author.id === '204777316621090816') {
            message.delete({ timeout: 10000 })
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
        if(message.content.startsWith('-')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
        if(message.content.startsWith('!')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
      /*
      if(message.author.id === '133260203759108096') {
            message.channel.send('Shut up Nick, you stupid bitch. My nut is more voluminous and bountiful than yours')
            .catch(console.error);                    
      }*/
    }
    // bigmoistedu
    if(message.channel.id === '486597105792843777') {
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            else {
                message.delete({ timeout: 10000 })
                .catch(console.error);
            }
        }
        if(message.author.id === '204777316621090816') {
            message.delete({ timeout: 10000 })
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
        if(message.content.startsWith('!')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
    }
    // Manreet's server
    if(message.channel.id === '466853620336295937') {
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete({ timeout: 20000 })
                .catch(console.error);
            }
            else {
                message.delete({ timeout: 10000 })
                .catch(console.error);
            }
        }
        if(message.author.id === '204777316621090816') {
            message.delete({ timeout: 10000 })
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete({ timeout: 5000 })
            .catch(console.error);
        }
    }
    // bigmoist
    if(message.channel.id === '133104742254510080') {
        if(message.content === '>>purge' && message.member.hasPermission('MANAGE_MESSAGES')) {
            message.delete();
            message.channel.messages.fetch().then(messages => {
                const commandMessages = messages.filter(msg => msg.author.bot || msg.content.startsWith(';;') || msg.content.startsWith('>>') || msg.content.startsWith('-'));
                message.channel.bulkDelete(commandMessages);
                          }).catch(err => {
                console.log('Error while doing Bulk Delete.');
                console.log(err);
            });
                /* message.channel.send('Deletion of messages successful. Total messages deleted: '
                                     + messagesDeleted); 
                console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted) */
        }
    }
    // devtest
    if(message.channel.id === '567923203880779787') {
        if(message.content === '>>purge' && message.member.hasPermission('MANAGE_MESSAGES')) {
            message.delete();
            message.channel.messages.fetch().then(messages => {
                const commandMessages = messages.filter(msg => msg.author.bot || msg.content.startsWith(';;') || msg.content.startsWith('>>'));
                message.channel.bulkDelete(commandMessages);
                          }).catch(err => {
                console.log('Error while doing Bulk Delete.');
                console.log(err);
            });
                /* message.channel.send('Deletion of messages successful. Total messages deleted: '
                                     + messagesDeleted); 
                console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted) */
        }
    }
    // Manreet's server
    if(message.channel.id === '466853620336295937') {
        if(message.content === '>>purge' && (message.member.hasPermission('MANAGE_MESSAGES') || message.author.id === ('133163729507319809'))) {
            message.delete();
            message.channel.messages.fetch().then(messages => {
                const commandMessages = messages.filter(msg => msg.author.bot || msg.content.startsWith(';;') || msg.content.startsWith('>>'));
                message.channel.bulkDelete(commandMessages);
                          }).catch(err => {
                console.log('Error while doing Bulk Delete.');
                console.log(err);
            });
        }
    }
/*      
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '?search') {
        let embed = new Discord.RichEmbed()
            .setColor("#73ffdc")
            .setDescription("Please enter a search query. Remember to narrow down your search.")
            .setTitle("YouTube Search API");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => console.log(err));
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
                    title: 'Select which song you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new Discord.RichEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
        }
    }
    */
});

 // Processes private token from .env file
client.login(process.env.TOKEN); 