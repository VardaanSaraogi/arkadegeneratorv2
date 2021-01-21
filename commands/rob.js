const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
let timeout = 86400000 
let amount = 500
module.exports= {
    name:"rob",
    description:"daily money ",
async run(message,args){
  let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
  if(ecoenabled===false) return message.channel.send("soz thats disabled")
  let  robenabled = db.get(`robenabled_${message.guild.id}`)

  if(robenabled === false)return message.channel.send("soz that comands disabled")

    let user = message.mentions.members.first()
    let targetuser = await db.get(`money_${user.id}`)
    let author = await db.get(`rob_${user.id}`)
    let author2 = await db.get(`money_${user.id}`)
    
    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`❌ You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {
    
    let moneyEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`❌ You need atleast 200 coins in your wallet to rob someone`);
    
    if (author2 < 200) {
        return message.channel.send(moneyEmbed)
    
    }
    let moneyEmbed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`❌ ${user.user.username} does not have anything you can rob`);
    if (targetuser < 0) {
        return message.channel.send(moneyEmbed2)
    }
    
    
    
    let vip = await db.fetch(`bronze_${user.id}`)
    if(vip === true) random = Math.floor(Math.random() * 200) + 1;
    if (vip === null) random = Math.floor(Math.random() * 100) + 1;
    
    let embed = new Discord.MessageEmbed()
    .setDescription(`✅ You robbed ${user} and got away with ${random} coins`)
    .setColor("#FFFFFF")
    message.channel.send(embed)
    
    db.subtract(`money_${user.id}`, random)
    db.add(`money_${user.id}`, random)
    db.set(`rob_${user.id}`, Date.now())
      
    };
}
}