const Discord = require('discord.js')
const {prefix} = require('../config.json')
module.exports = {
    name:"economy",
    description:"databse",
    async run(message,args){
       const embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle("CONFIGURABLE SETTINGS")
       .setAuthor(message.author.username)
       .setThumbnail(message.author.displayAvatarURL())
       .addFields(
           {name:"Configure Work ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE work"},
           {name:"Configure Economy System" , value: prefix + "disable bal"}
       )
       message.channel.send(embed)
    }
}