const Discord = require('discord.js')
var enableStatus;
const db = require('quick.db')
module.exports = {
    name:"disable",
    description:"databse",
    async run(message,args){
        let enabledWork = await db.fetch(`enabledWork_${message.guild.id}`)
        if (args[0] === "work" && enabledWork === false){
          message.channel.send('Thats alr disabled , how tf do u plan to disable something thats alr disabled')
        }
      if(args[0] === "work" && enabledWork === true){
        db.set(`enabledWork_${message.guild.id}` , false)
        console.log(enabledWork)
        message.channel.send("work has been `disabled`")
      }
    }
}