const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const mcapi = require('mcapi');

module.exports = {
    name: 'mcskin',
    description: 'shows mc skin',
    async execute(Message, args, Discord, client) {
        let uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
        const newEmbed = new MessageEmbed()
        .addField("**NAME**",`${args.join(" ")}`)
        .addField("**UUID**",uuid)
        .addField("**DOWNLOAD**",`[.PNG](https://minotar.net/download/${args.join(" ")})`)
        .setImage(`https://mc-heads.net/body/${args[0]}.png`)
        .setThumbnail(`https://mc-heads.net/head/${args[0]}.png`)
        .setColor('RANDOM')

        Message.channel.send({ embeds: [newEmbed] });        
    }
}