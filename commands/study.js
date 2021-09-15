const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'study',
    decription: 'commands for help',
    execute(message, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setTitle("Study commands")
        .addField("`>calculator` : it helps u in calculations  **>calculator**",
                   "`>search`: helps you to find the answers  **>search earth**")
        .setColor('AQUA')
        message.channel.send({ embeds: [newEmbed] });
    }
}