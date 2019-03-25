const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("559703214728151042")
setInterval(function() {
channel.send(`Flux server Flux server Flux server`);
}, 30)
})

client.login(process.env.BOT_TOKEN);