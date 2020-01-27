const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671364794665664512")
setInterval(function() {
channel.send(`hla hla hla hla hla hla hla hla hla hla hla`);
}, 10)
})

client.login(process.env.BOT_TOKEN);
