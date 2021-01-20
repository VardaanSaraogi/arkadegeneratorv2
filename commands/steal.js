const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
let timeoutsteal = 3600000
let amount = 500
module.exports= {
    name:"steal",
    description:"steal money ",
async run(message,args){
    let stealer = await db.fetch(`stealer_${message.author.id}`)

    let stealearnt = Math.floor(Math.random() * 1000) +1
 let user = message.mentions.users.first()
 let author = db.fetch(`money_${message.author.id}`)
 let steal = Math.floor(Math.random() * 500) +1
if(!args[0]){
    message.channel.send('Who do u wanna steal from dummy')
}
if(args[0] === user){
 if(stolen != null && timeoutsteal - (Date.now() - stolen) > 0 ){
    let time = ms(timeoutsteal - (Date.now() - stolen));
    message.channel.send(`Chill dude , stealing so much is bad , come back in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
    
} else {
   db.subtract(`money_${user}`, stealearnt )
   db.add(`stealer_${user}`, timeoutsteal )
   message.channel.send(user + "You have been stolen from lmao")
}
}
}
}
