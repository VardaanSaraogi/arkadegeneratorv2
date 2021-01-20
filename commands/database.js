const Discord = require('discord.js')
module.exports = {
    name:"db",
    description:"databse",
    async run(message,args){
        message.channel.send(`${require("quick.db").version}`)
    }
}