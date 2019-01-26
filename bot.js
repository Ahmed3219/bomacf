const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '@'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا شباب') {
    msg.reply('هلا');
  }
});

const gamestats = [`@help`,`by bOmA CF`,``,``]
var index = 0
var timer = 10
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/bomacf') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});



























  });
client.login('NTM3NjI4MzgzMTE1MzQ1OTQy.Dy5rcg.geOIl5VrnMQmweiW6NN60FtPpSw');
