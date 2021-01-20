const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name:"setprefix",
    description:"databse",
    async run(message,args){
        if (message.member.roles.cache.some(role => role.name === 'coders')) {
        
        
       if(!args[0]) return message.channel.send("Set a prefix bruh")
       db.set(`prefix_${message.guild.id}` , args[0])
       message.channel.send(`The prefix for this server is ${args[0]}`)
} else{
    message.channel.send("IDIOT U DONT HAVE PERMS")
}
    }

}