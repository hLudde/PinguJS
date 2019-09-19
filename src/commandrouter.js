const pingu = require("./commands/pingu.js");
const noot = require("./commands/noot.js");
const ping = require("./commands/ping");

async function command(msg, args, client){
    console.log(args[0]);
    switch(args[0]){
        case "pingu":
            await pingu.sendNoot(msg.channel)
            break;
        case "noot":
            await noot.noot(msg, client);
            break;
        case "ping":
            await ping.pong(msg);
            break;
        case "nootnoot":
            await noot.nootnoot(msg, client);
            break;
    }
}

module.exports = {
    command
}