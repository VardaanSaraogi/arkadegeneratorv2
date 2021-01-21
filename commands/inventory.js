const db = require('quick.db')
const Discord = require('discord.js')
var {color} = require('../config.json')

module.exports= {
    name:"inventory",
    description:"inventory",
     async run(message , args , client) {
      let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
      if(ecoenabled===false) return message.channel.send("soz thats disabled")
      let user = message.mentions.users.first() || message.author
        let items = db.get(user.id)
        console.log(items)
        let usablecolor = await db.fetch(`color_${message.guild.id}`)
        color = usablecolor
        if( items === null)  items = `${user} has nothing`
          
        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`${user.username} ' s INVENTORY`)
        .addField("inventory" , items)

        message.channel.send(embed)
        } 
     //   
     
    }