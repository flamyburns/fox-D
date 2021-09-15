const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'info',
    description: 'say about the bot',
    async execute(Message, args, Discord, client) {
        let member = Message.mentions.users.first() 
        || Message.guild.members.cache.get(args[0])?.user
        || Message.author

        const status = {
            online: ':online:',
            dnd: ':2531_dnd:',
            idle: ':idle:',
            offline: ':7445_status_offline:'
        }

        const newEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 512 }))
        .setAuthor(` ${member.tag}`, member.displayAvatarURL())
        .addField('**ID**', `${member.id}`)
        .addField('**USERNAME**', `${member.username}`)
        .addField('**Account created at**', `${moment.utc(member.createdAt).format('dddd, MMMM Do YYYY')}`)
        .addField('**Joined server**', `${member.joinedAt}`)

        Message.channel.send({ embeds: [newEmbed] });
    }
}