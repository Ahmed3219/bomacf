const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('$help', { type: 'WATCHING' })
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا شباب') {
    msg.reply('هلا');
  }
});




























  });
client.login('NTM4ODY1NDUzNTk0OTY4MDkw.DzEYcA.SK5vXYm_51DpStrr8voZcEIBKRY');
