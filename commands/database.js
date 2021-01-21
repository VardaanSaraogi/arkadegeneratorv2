const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name:"db",
    description:"databse",
    async run(message,args){
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        message.channel.send(`${require("quick.db").version}`)
    }
}