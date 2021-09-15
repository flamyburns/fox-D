const { Client, Message ,MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'wiki2',
    description: 'wajdwjada',
    async execute(message, args, Discord, client) {
        const wiki = require('wikipedia');

      (async () => {
	  try {
		const summary = await wiki.summary(`${args.join(" ")}`);
		const newEmbed = new MessageEmbed()
        .setTitle(`${summary.displaytitle}`)
        .setDescription(`${summary.extract}`)
        .setThumbnail(`${summary.originalimage.source}`)
        .setColor('RANDOM')

        message.channel.send({ embeds: [newEmbed] });
	
	   }  catch (error) {
        const newEmbed = new MessageEmbed()
        .setTitle("| Couldnt find the result boi ")
        .setColor('RED')

        message.channel.send({ embeds: [newEmbed] });
	      }
        })();
    }
}