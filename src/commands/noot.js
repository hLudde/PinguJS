async function noot(msg, client){
    var voice_channel = msg.member.voiceChannel;
    if(voice_channel==null){
        sendError(msg);
        return;
    }
    var connection = await client.voice.joinChannel(voice_channel).catch((err)=>{
        console.log('Unable to send noot: '+err);
    });
    connection.playFile("mp3/nootnoot.mp3").on('end', ()=>{
        process.env.NOOTS = 1 + parseInt(process.env.NOOTS);
        client.user.setActivity(process.env.NOOTS+" noots so far!");
        connection.disconnect();
    });
}

async function nootnoot(msg, client){
    var voice_channel = msg.member.voiceChannel;
    if(voice_channel==null){
        sendError(msg);
        return;
    }
    var connection = await client.voice.joinChannel(voice_channel).catch((err)=>{
        console.log('Unable to send noot: '+err);
    });
    connection.playFile("mp3/newsnoot.mp3").on('end', ()=>{
        process.env.NOOTS = 1 + parseInt(process.env.NOOTS);
        client.user.setActivity(process.env.NOOTS+" noots so far!");
        connection.disconnect();
    });
}

function sendError(msg){
    msg.channel.send("Join a voicechannel and retry.").catch((err)=>{
        console.log('Unable to send errormessage: '+err);
        return;
    });
    return;
}

module.exports = {
    noot,
    nootnoot
}