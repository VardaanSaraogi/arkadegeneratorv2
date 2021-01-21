const Discord = require('discord.js')
const {default_Enabled} = require('../config.json')
var enableStatus;
const db = require('quick.db')
var economy = "economy"
var work = "work"
module.exports = {
    name:"enable",
    description:"databse",
    async run(message,args){
      if (!message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send('soz but you dont have perms')

      let  workEnabled = db.get(`workenabled_${message.guild.id}`)
      let   DailyEnabled = db.get(`dailyenabled_${message.guild.id}`)
      let   monthlyenabled = db.get(`monthlyenabled_${message.guild.id}`)
      let  robenabled = db.get(`robenabled_${message.guild.id}`)
      let  ecoenabled = db.get(`ecoenabled_${message.guild.id}`)
      
     if(workEnabled === null) workEnabled = default_Enabled
     if(!args[0]) return message.channel.send("lmaooo no argssss")
      if(args[0].toLowerCase() === "work" && workEnabled === true){
        message.channel.send("OOF bruv , u cant enable something thats alr enabled")
     }
     else if(args[0].toLowerCase() === "work" && workEnabled === false){
       message.channel.send('DONE')
       db.set(`workenabled_${message.guild.id}` , true)
     }
     else if(args[0].toLowerCase() === "daily" && DailyEnabled === true) {
      message.channel.send("OOF bruv , u cant enable something thats alr enabled")
     }
      else if(args[0].toLowerCase() === "daily" && DailyEnabled === false){
        message.channel.send('DONE')
        db.set(`dailyenabled_${message.guild.id}` , true)
      }
      else if(args[0].toLowerCase() === "monthly" && monthlyenabled === true) {
        message.channel.send("OOF bruv , u cant enable something thats alr enabled")
       }
        else if(args[0].toLowerCase() === "monthly" && monthlyenabled === false){
          message.channel.send('DONE')
          db.set(`monthlyenabled_${message.guild.id}` , true)
        }
        else if(args[0].toLowerCase() === "rob" && robenabled === true) {
          message.channel.send("OOF bruv , u cant enable something thats alr enabled")
         }
          else if(args[0].toLowerCase() === "rob" && robenabled === false){
            message.channel.send('DONE')
            db.set(`robenabled_${message.guild.id}` , true)
          }
          else if(args[0].toLowerCase() === "economy" && ecoenabled === true) {
            message.channel.send("OOF bruv , u cant enable something thats alr enabled")
           }
           else if(args[0].toLowerCase() === "economy" && ecoenabled === false){
            message.channel.send('DONE')
            db.set(`ecoedenabled_${message.guild.id}` , true)
          }

    }
}