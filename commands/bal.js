const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name:"bal",
    description:"balance",
    async run(message,args){
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        let user = message.mentions.users.first() || message.author
        let money = db.fetch(`money_${user.id}`)
        if(money === null) money = 0
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${user.username}' s Balance`)
        .addFields(
            {name:"Balance" , value:money},
        )
        message.channel.send(embed)
    }
}