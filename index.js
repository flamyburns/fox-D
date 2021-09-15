const Discord = require("discord.js");
const config = require("./config.json");
const { Client, Message ,MessageEmbed } = require('discord.js');

const prefix = (config.prefix)

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log("online 💚 ")
});

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});
// You can define the Player as *client.player* to easly access it.
client.player = player;

client.on('messageCreate', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
     const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if(command === 'test'){
        message.channel.send('wroks')
    } else if(command === 'invite'){
        client.commands.get('invite').execute(message, args, Discord);
    } else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args, Discord);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if(command === 'search'){
        client.commands.get('wiki2').execute(message, args, Discord);
    } else if(command === 'calculator'){
        client.commands.get('calculator').execute(message, args, Discord);
    } else if(command === 'helpstudy'){
        client.commands.get('study').execute(message, args, Discord);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    } else if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if(command === 'mcskin'){
        client.commands.get('mcskin').execute(message, args, Discord);
    } else if(command === 'serverstatus'){
        client.commands.get('serverstatus').execute(message, args, Discord);
    } else if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }
})


client.login(config.token);