// server.js
// where your node app starts

// init project
const http = require('http');
const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
const guild = client.guilds.get('133104742254510080');

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

// app.listen(3000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Returns concatenated string with user information
function userInfo(user) {
    var finalString = '';

    finalString += '**' + user.username + '**, with ID **' + user.id + '**';

    var userCreated = user.createdAt.toString().split(' ');
    finalString += ', was **created on ' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '**. \n'

    return finalString;
}

// Confirms client is working on developer end
client.on('ready', () => {
    console.log('Ready!');
});
      
// Checks if message is music bot command or response, and deletes it
client.on('message', message => {
  
    // Variables for parsing user information
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '>>'
    
    // Checks if user is bot, and ignores message
    if (sender.id === '488242523240660993' || sender.id === '184405311681986560' || sender.id === '204777316621090816') {
      return;
    }
    
    // Runs userInfo function if user enters '>>' command
    if (msg.startsWith(prefix + 'USERINFO')) {
        message.channel.send(userInfo(sender))
        .catch(console.error);
    }  
                          
    // Removes commands and bot messages from main channel
    if (message.channel.id === '133104742254510080') {
        if (message.author.bot) {
            message.delete(60000)
            .catch(console.error);
        }
        if (message.content.startsWith(';;')) {
            message.delete(60000)
            .catch(console.error);
        }
        if (message.content.startsWith('>>')) {
            message.delete(60000)
            .catch(console.error);
        }
    }
});

// Process private token
client.login(process.env.TOKEN);