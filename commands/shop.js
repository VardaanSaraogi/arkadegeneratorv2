const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name:"shop",
    description:"databse",
    async run(message,args){
        let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
        if(ecoenabled===false) return message.channel.send("soz thats disabled")
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Shop For Today')
        .addFields(
            {name:"PS5" ,value: " Price 700"},
            { name:"Xbox Series X" ,value: " Price 600" },
            { name:"Human" , value: " Price 60000"}
        )
        message.channel.send(embed)

    }
}