const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name:'avatar',
    descrition:'show avatar',
    execute(Message, args, Discord, client) {
        let member = Message.mentions.users.first() 
        || Message.guild.members.cache.get(args[0])?.user
        || Message.author
        
        const newEmbed = new MessageEmbed()
        .setTitle(`${member.tag} avatar`)
        .setImage(member.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor('YELLOW')

        Message.channel.send({ embeds: [newEmbed] });
    }
};
