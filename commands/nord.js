const Discord = require("discord.js")
    const {nordAccs} = require('../accounts.json')
module.exports = {
    name:"gennord",
    description:"generates a nord account",
    async run (message , args) { 
     
            
        
        const NordHandler = () => nordAccs[Math.floor(Math.random() * nordAccs.length)]

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("BRUHHH")
        .addFields(
            {name:"nord accounts"  , value: NordHandler()},
        )
        message.channel.send("GENERATED!!! Check DM's")
        message.author.send(Embed)
    }    

}