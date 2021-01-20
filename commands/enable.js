const Discord = require('discord.js')
var enableStatus;
const db = require('quick.db')
module.exports = {
    name:"enable",
    description:"databse",
    async run(message,args){
      let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        let enabledWork = await db.fetch(`enabledWork_${message.guild.id}`)

        if (args[0] === "work" && enabledWork === true){
          message.channel.send('Thats alr enabled , how tf do u plan to enable something thats alr enabled')
        }
      else if(args[0] === "work" && enabledWork === false){
        db.set(`enabledWork_${message.guild.id}` , true)
        console.log(enabledWork)
        message.channel.send("work has been `enabled`")
      }
    
    }
}