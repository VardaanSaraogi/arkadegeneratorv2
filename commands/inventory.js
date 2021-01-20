const db = require('quick.db')
const Discord = require('discord.js')
module.exports= {
    name:"inventory",
    description:"inventory",
     async run(message , args , client) {
      let user = message.mentions.users.first() || message.author
        let items = db.get(user.id)
        console.log(items)
        
        if( items === null)  items = `${user} has nothing`
          
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} ' s INVENTORY`)
        .addField("inventory" , items)

        message.channel.send(embed)
        } 
     //   
     
    }