const Discord = require("discord.js")
    const {nordA} = require("../accounts.json")
module.exports = {
    name:"gennord",
    description:"generates a nord account",
    async run (message , args) { 
     
            
        
        const NordHandler = () => nord[Math.floor(Math.random() * nord.length)]

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("BRUHHH")
        .addFields(
            {name:"nord accounts"  , value: NordHandler()},
        )
        message.author.send(Embed)
    }    

}