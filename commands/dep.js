const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
let timeout = 86400000 
let amount = 500
var max;
module.exports= {
    name:"dep",
    description:"daily money ",
async run(message,args){
    let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
    if(ecoenabled===false) return message.channel.send("soz thats disabled")
    let user = message.author;

    let member = db.fetch(`money_${user.id}`)
    let member2 = db.fetch(`bank_${user.id}`)
  
    if (args[0] == 'all')  {
        
        let money = db.fetch(`money_${user.id}`)
        max = money
      let bank = await db.fetch(`bank_${user.id}`)
  
      let embedbank = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setDescription("❌ You don't have any money to deposit")
  
      if(money === 0) return message.channel.send(embedbank)
  
      db.add(`bank_${user.id}`, max)
      db.subtract(`money_${user.id}`, money)
      let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`✅  You have deposited all your coins into your bank`);
    message.channel.send(embed5)
    
    } else {
    
    let embed2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ Specify an amount to deposit`);
    
    if (!args[0]) {
        return message.channel.send(embed2)
        .catch(err => console.log(err))
    }
    let embed3 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ You can't deposit negative money`);
  
    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ You don't have that much money`);
  
    if (member < args[0]) {
        return message.channel.send(embed4)
    }
  
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`✅  You have deposited ${args[0]} coins into your bank`);
  
    message.channel.send(embed5)
    db.add(`bank_${user.id}`, args[0])
    db.subtract(`money_${user.id}`, args[0])
    }
}
}