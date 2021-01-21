const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
let timeoutmonth = 2592000000 
let amount = 50000
module.exports= {
    name:"monthly",
    description:"daily money ",
async run(message,args){
    let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
    if(ecoenabled===false) return message.channel.send("soz thats disabled")
    let   monthlyenabled = db.get(`monthlyenabled_${message.guild.id}`)
    if(monthlyenabled === false)return message.channel.send("soz that comands disabled")
    let monthly = await db.fetch(`monthly_${message.author.id}`)

if(monthly != null && timeoutmonth - (Date.now() - monthly) > 0 ){
    let time = ms(timeoutmonth - (Date.now() - monthly));
    message.channel.send(`You cant redeem more than once in a montyh dum dum , come back in ${time.hours}h ${time.minutes}m ${time.seconds}s`)

} else {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("REWARDSSS")
    .addField("Collected " , amount)
    message.channel.send(embed)
    db.add(`money_${message.author.id}` , amount)
    db.add(`monthly_${message.author.id}` , Date.now())
}
}
}

