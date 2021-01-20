const Discord = require('discord.js')
module.exports = {
    name:"db",
    description:"databse",
    async run(message,args){
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        message.channel.send(`${require("quick.db").version}`)
    }
}