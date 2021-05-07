const Discord = require ("discord.js")
const client = new Discord.Client();
const.prefix = "yo";
client.on("ready", message => {
    console.log("I am ready to go");
    
});


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`Pong - ${client.ws.ping}`)
    }
})

client.login("ODM0NDE4NzM0Nzc2NTgyMjI1.YIAnAQ.hFJ78-rH6SewCB-BSILMiZrp7v4")
