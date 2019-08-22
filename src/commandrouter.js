const pingu = require(".\\commands\\pingu.js");
const noot = require(".\\commands\\noot.js");

async function command(msg, args, client){
    console.log(args[0]);
    switch(args[0]){
        case "pingu":
            await pingu.sendNoot(msg.channel)
            break;
        case "noot":
            await noot.noot(msg, client);
            break;
    }
}

module.exports = {
    command
}