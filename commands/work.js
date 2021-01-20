const db = require('quick.db');
const ms = require('parse-ms')
const Discord = require('discord.js');
module.exports = {
    name:"work",
    description:"woork",
    async run(message,args){
        let  enabledBal = await db.fetch(`enabledBal_${message.guild.id}`)
        if(enabledBal === false) return message.channel.send('soz thats disabled')
        let enabledWork = await db.fetch(`enabledWork_${message.guild.id}`)
        
        if(enabledBal === false) return message.channel.send('soz thats disabled')
     

        if(enabledWork === false) return message.channel.send('soz thats disabled')
        
        let timeoutworked = 3600000
        let worked = await db.fetch(`worked_${message.author.id}`)

        if(worked != null && timeoutworked - (Date.now() - worked) > 0 ){
            let time = ms(timeoutworked - (Date.now() - worked));
            message.channel.send(`You have alr worked  dum dum , come back in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
        
        }else{
            let amountearned = Math.floor(Math.random() * 500) +1
            let jobs =["Youtuber" , "Chef" , "PoliceMan", "MrBeast's Friend" ]
            let jobHandler =jobs[ Math.floor(Math.random() * jobs.length)]
            let embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag} , it payed off` , message.author.displayAvatarURL())
            .setDescription(`You worked as a ${jobHandler} and earnt ${amountearned}`)
            message.channel.send(embed)
            db.add(`money_${message.author.id}` , amountearned)
            db.set(`worked_${message.author.id}` , Date.now())
        }
    }
}