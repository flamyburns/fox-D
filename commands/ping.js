const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'shows bot strong network',
    execute(message, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#fadadd')
        .setTitle("pong :ping_pong: ")
        .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()

        message.channel.send({ embeds: [newEmbed] });                
    }
}