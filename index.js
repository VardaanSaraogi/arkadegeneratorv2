const fs = require('fs');
const Discord = require('discord.js');
const {prefix}  = require('./config.json');
require('dotenv').config()
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
require("./util/eventHandler")(client)
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
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
