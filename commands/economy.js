const Discord = require('discord.js')
const {prefix} = require('../config.json')
const db = require('quick.db')
module.exports = {
    name:"economy",
    description:"databse",
    async run(message,args){
        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = default_prefix
       const embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle("CONFIGURABLE SETTINGS")
       .setAuthor(message.author.username)
       .setThumbnail(message.author.displayAvatarURL())
       .addFields(
           {name:"Configure Work ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE work"},
           {name:"Configure Daily Money  ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE daily"},
           {name:"Configure Weekly Money  ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE weekly"},
           {name:"Configure Monthly Money  ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE monthly"},
           {name:"Configure Rob  ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE rob"},
           {name:"Configure Economy  ON/OFF" , value: "Usage: " + prefix + "DISABLE/ENABLE economy"},



           {name:"Configure Economy System" , value: prefix + "disable economy"}
       )
       message.channel.send(embed)
    }
}