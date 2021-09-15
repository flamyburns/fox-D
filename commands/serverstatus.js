const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const util = require('minecraft-server-util');
const { Thumbnails } = require('youtubei');

module.exports = {
    name: 'serverstatus',
    description: 'gives status of the bot',
    async execute(message, args, Discord, client) {
        util.status(`${args.join(" ")}`)
    .then((response) => {
        const newEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .addField("**Ip**", `${response.host}:${response.port}`)
        .addField("**Description**", `${response.description}`)
        .addField("**Version**", `${response.version}`)
        .addField("**Players**", `${response.onlinePlayers}/${response.maxPlayers}`)
        .addField("**roundTripLatency**", `${response.roundTripLatency}`)
        .setThumbnail('https://e1.pngegg.com/pngimages/712/223/png-clipart-minecraft-icon-1-4-3d-diamond-ore-grey-cube-illustration.png')

        message.channel.send({ embeds: [newEmbed] });
    })
    .catch((error) => {
        message.channel.send("couldnt get any results");
    });
       
    }
}