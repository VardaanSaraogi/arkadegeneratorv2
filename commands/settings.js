const Discord = require('discord.js')
const {default_prefix} = require('../config.json')
module.exports = {
    name:"settings",
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
           {name:"Configure Economy" , value: "Usage: " + prefix + "economy"},
           {name:"Configure Prefix" , value:"your current prefix + setprefx + yournewprefix"}
       )
       message.channel.send(embed)
    }
}