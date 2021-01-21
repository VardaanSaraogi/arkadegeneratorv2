const fs = require('fs');
const Discord = require('discord.js');
const {default_prefix , default_Enabled}  = require('./config.json');
require('dotenv').config()
const db = require('quick.db')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
require("./util/eventHandler")(client)
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name  , command);
}


client.on('message', message => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).run(message, args, Discord , client );
    } catch (error) {
        console.error(error);
        message.reply('there was an error!!');
    }

    
});

client.login(process.env.token);