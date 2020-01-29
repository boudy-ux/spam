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
client1.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
client9.login(process.env.BOT_TOKEN9);
