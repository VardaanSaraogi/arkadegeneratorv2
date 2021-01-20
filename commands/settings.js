const Discord = require('discord.js')
const {prefix} = require('../config.json')
module.exports = {
    name:"settings",
    description:"databse",
    async run(message,args){
       const embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle("CONFIGURABLE SETTINGS")
       .setAuthor(message.author.username)
       .setThumbnail(message.author.displayAvatarURL())
       .addFields(
           {name:"Configure Economy" , value: "Usage: " + prefix + "economy"},
           {name:"Configure Prefix" , value:"your current prefix + setprefx + yournewprefix"}
       )
       message.channel.send(embed)
    }
}