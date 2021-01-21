const Discord = require('discord.js')
const red = "#e31231"
const blue = "#1238e3"
const green = "#00FF00"
const db = require('quick.db')
var {color} = require('../config.json')

module.exports = {
    name:"color",
    description:"databse",
    async run(message,args){
        let usablecolor = await db.fetch(`color_${message.guild.id}`)
        if(usablecolor === null) usablecolor = color

        if(args[0].toLowerCase() === "red"){

            db.set(`color_${message.guild.id}` , red)
        }
        else if(args[0].toLowerCase() === "blue"){

            db.set(`color_${message.guild.id}` , blue)
        }
        else if(args[0].toLowerCase() === "green"){

            db.set(`color_${message.guild.id}` , green)
        }
     console.log(color)
const tembed = new Discord.MessageEmbed()
.setColor(usablecolor)
.setTitle("test")
.addFields(
    {name:"color" ,value: usablecolor}
)
message.channel.send(tembed)
    }
}