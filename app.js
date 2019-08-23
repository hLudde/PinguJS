require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require("./src/commandrouter.js");

process.env.NOOTS = 0;

client.on('ready', ()=>{
    client.user.setActivity(process.env.NOOTS+" noots so far!");
})

client.on('message', msg =>{
    if(msg.content.startsWith(process.env.BOT_PREFIX)&&!msg.author.bot){
        var message = msg.content.slice(2, msg.content.length);
        var args = message.split(' ');
        commands.command(msg, args, client);
    }
})

client.login(process.env.BOT_TOKEN);