const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
let timeout = 86400000 
let amount = 500
module.exports= {
    name:"daily",
    description:"daily money ",
async run(message,args){
    let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
    let daily = await db.fetch(`daily_${message.author.id}`)

if(daily != null && timeout - (Date.now() - daily) > 0 ){
    let time = ms(timeout - (Date.now() - daily));
    message.channel.send(`You cant redeem more than once in a day dum dum , come back in ${time.hours}h ${time.minutes}m ${time.seconds}s`)

} else {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("REWARDSSS")
    .addField("Collected " , amount)
    message.channel.send(embed)
    db.add(`money_${message.author.id}` , amount)
    db.add(`daily_${message.author.id}` , Date.now())
}
}
}

