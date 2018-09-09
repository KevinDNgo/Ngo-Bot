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

//app.listen(3000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Confirms client is working on developer end
client.on('ready', () => {
    console.log('Ready!');
});

// Checks if message is music bot command or response, and deletes it
client.on('message', message => {
    if(message.channel.id === '133104742254510080') {
        if(message.author.bot) {
            message.delete(60000)
            .catch(console.error);
        }
        if(message.content.startsWith(';;')) {
            message.delete(60000)
            .catch(console.error);
        }
    }
});

// Processes private token from .env file
client.login(process.env.TOKEN);