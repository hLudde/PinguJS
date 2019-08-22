async function sendNoot(channel){
    await channel.send("Noot noot!").catch((err)=>{
        console.log('Unable to send noot: '+err);
        return;
    });
}

module.exports = {
    sendNoot
}