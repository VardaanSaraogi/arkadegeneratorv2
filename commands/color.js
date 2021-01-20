const Discord = require('discord.js')
const red = "#e31231"
const blue = "#1238e3"
const db = require('quick.db')
var {color} = require('../config.json')

module.exports = {
    name:"color",
    description:"databse",
    async run(message,args){
        let usablecolor = await db.fetch(`color_${message.guild.id}`)
        if(args[0] === "red"){

            db.set(`color_${message.guild.id}` , red)
            color = usablecolor
        }
        else if(args[0] === "blue"){

            db.set(`color_${message.guild.id}` , blue)
            color = usablecolor
        }
     console.log(color)
const tembed = new Discord.MessageEmbed()
.setColor(color)
.setTitle("LMAOO")
.addFields(
    {name:"bruh" ,value: "bruh"}
)
message.channel.send(tembed)
    }
}