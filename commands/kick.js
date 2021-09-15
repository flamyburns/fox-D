const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.mentions.users.first() ;
            memberTarget.kick();

            message.reply("user has been kicked he wont undestemated u again")
            memberTarget.send("YOU ARE KICKED DONT RETURN BACK ")
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }

}