const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name:"bal",
    description:"balance",
    async run(message,args){
        let user = message.mentions.users.first() || message.author
        let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
        if(ecoenabled===false) return message.channel.send("soz thats disabled")
       let bank = await db.fetch(`bank_${user.id}`)

        let money = db.fetch(`money_${user.id}`)
        if(money === null) money = 0
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${user.username}' s Balance`)
        .addFields(
            {name:"Balance" , value:money},
            {name:"bank" , value:money},

        )
        message.channel.send(embed)
    }
}