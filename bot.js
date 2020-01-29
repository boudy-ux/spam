const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671364794665664512")
setInterval(function() {
channel.send(`FAST OF THE FURIOS 9 FAST OF THE FURIOS 9 FAST OF THE FURIOS 9`);
}, 10)
})

client.login(process.env.BOT_TOKEN);
