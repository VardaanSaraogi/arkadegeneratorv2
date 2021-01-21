const Discord = require('discord.js')
var enableStatus;
const db = require('quick.db')
const {default_prefix} = require('../config.json')
module.exports = {
    name:"enable",
    description:"databse",
    async run(message,args){
        let enabledWork = await db.fetch(`enabledWork_${message.guild.id}`)
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if (args[0] === "work" && enabledWork === true){
          message.channel.send('Thats alr enabled , how tf do u plan to enable something thats alr enabled')
        }
     else  if(args[0] === "work" && enabledWork === false){
        db.set(`enabledWork_${message.guild.id}` , true)
        console.log(enabledWork)
        message.channel.send("work has been `enabled`")
      }
      else if (args[0] === "economy" && enabledWork ===  true){
        message.channel.send('Thats alr enabled , how tf do u plan to enable something thats alr enabled')
      }
    else if(args[0] === "economy" && enabledWork === false && args[1] !== "yes" ){
      message.channel.send("doing this will re enable  the entire economy system , are you sure you want to do this? , type prefix + enable bal yes to confirm")
    }
    else if(args[0] === "economy" && args[1] === "yes" && enabledWork === false){
      db.set(`enabledBal_${message.guild.id}` , true)
      console.log(enabledBal)
      message.channel.send("DONE , enabled the economy system")
    }
    if (args[0] === "economy" && enabledBal === false){
      message.channel.send('Thats alr enabled, how tf do u plan to enable something thats alr disabled')
    }
    }
}