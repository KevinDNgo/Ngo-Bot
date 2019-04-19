// server.js
// where your node app starts
// init project
const http = require('http');
const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();

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
    // bigmoist
    if(message.channel.id === '133104742254510080') {
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete(15000)
                .catch(console.error);
            }
            else {
                message.delete(10000)
                .catch(console.error);
            }
        }
        if(message.author.id === '204777316621090816') {
            message.delete(10000)
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete(5000)
            .catch(console.error);
        }
        if(message.content.startsWith('!')) {
            message.delete(5000)
            .catch(console.error);
        }
    }
    // bigmoistedu
    if(message.channel.id === '486597105792843777') {
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete(15000)
                .catch(console.error);
            }
            else {
                message.delete(10000)
                .catch(console.error);
            }
        }
        if(message.author.id === '204777316621090816') {
            message.delete(10000)
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete(5000)
            .catch(console.error);
        }
        if(message.content.startsWith('!')) {
            message.delete(5000)
            .catch(console.error);
        }
    }
    // Manreet's server
    if(message.channel.id === '466853620336295937') {
        if(message.author.id === '184405311681986560') {
            // Increased deletion delay of queue command for readability
            if(message.content.indexOf('with a remaining length of') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of history command for readability
            else if(message.content.indexOf('Showing tracks in history.') !== -1) {
                message.delete(20000)
                .catch(console.error);
            }
            // Increased deletion delay of play select command for readability
            else if(message.content.indexOf('Searching YouTube for') !== -1) {
                message.delete(15000)
                .catch(console.error);
            }
            else {
                message.delete(10000)
                .catch(console.error);
            }
        }
        if(message.author.id === '204777316621090816') {
            message.delete(10000)
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete(5000)
            .catch(console.error);
        }
    }
    // devtest
    if(message.channel.id === '133104742254510080') {
        if(message.content === '>>purge' && message.author.roles.has('133106336421511168')) {
            message.delete();
            message.channel.fetchMessages().then(messages => {
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
    // devtest
    if(message.channel.id === '567923203880779787') {
        if(message.content === '>>purge' && message.member.hasPermission('MANAGE_MESSAGES')) {
            message.delete();
            message.channel.fetchMessages().then(messages => {
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
            message.channel.fetchMessages().then(messages => {
                const commandMessages = messages.filter(msg => msg.author.bot || msg.content.startsWith(';;') || msg.content.startsWith('>>'));
                message.channel.bulkDelete(commandMessages);
                          }).catch(err => {
                console.log('Error while doing Bulk Delete.');
                console.log(err);
            });
        }
    }
});

 // Processes private token from .env file
client.login(process.env.TOKEN); 