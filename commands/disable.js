const Discord = require('discord.js')
var enableStatus;
const db = require('quick.db')
var economy = "economy"
module.exports = {
    name:"disable",
    description:"databse",
    async run(message,args){
        let enabledWork = await db.fetch(`enabledWork_${message.guild.id}`)
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if (args[0].toLowerCase() === "work" && enabledWork === false){
          message.channel.send('Thats alr disabled , how tf do u plan to disable something thats alr disabled')
        }
     else  if(args[0].toLowerCase() === "work" && enabledWork === true){
       console.log(args[0].toLowerCase())
        db.set(`enabledWork_${message.guild.id}` , false)
        console.log(enabledWork)
        message.channel.send("work has been `disabled`")
      }
      else if (args[0].toLowerCase() === economy && enabledWork === false){
        message.channel.send('Thats alr disabled , how tf do u plan to disable something thats alr disabled')
      }
    else if(args[0].toLowerCase() === economy && enabledWork === true && args[1].toLowerCase() !== "yes" ){
      message.channel.send("doing this will disable the entire economy system , are you sure you want to do this? , type prefix + disable bal yes to confirm")
    }
    else if(args[0].toLowerCase() === economy && args[1].toLowerCase() === "yes" && enabledWork === true){
      db.set(`enabledBal_${message.guild.id}` , false)
      console.log(enabledBal)
      message.channel.send("DONE , disabled the economy system")
    }
    else if (args[0].toLowerCase() === economy && enabledBal === false){
      message.channel.send('Thats alr disabled , how tf do u plan to disable something thats alr disabled')
    }
    }
}