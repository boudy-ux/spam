const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671364794665664512")
setInterval(function() {
channel.send(`اهلا ازيك عامل ايه كويس الحمدالله وانتا عامل ايه بخير تمام الواحد مش لقي حاجه يعملها`);
}, 10)
})

client.login(process.env.BOT_TOKEN);
