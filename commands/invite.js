const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
    name:'invite',
    description: 'link for inviteing the bot',
    execute(message, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Invite me')
        .setDescription('[Click here to invite me !](https://discord.com/oauth2/authorize?client_id=875669785139085362&scope=bot&permissions=5653261894)')
        message.channel.send({ embeds: [newEmbed] })
    }
}