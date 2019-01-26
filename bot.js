const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا شباب') {
    msg.reply('هلا');
  }
});

client.login('NTM3NjI4MzgzMTE1MzQ1OTQy.Dy5rcg.geOIl5VrnMQmweiW6NN60FtPpSw');
