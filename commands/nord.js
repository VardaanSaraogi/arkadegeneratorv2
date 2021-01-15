const Discord = require("discord.js")

module.exports = {
    name:"gennord",
    description:"generates a nord account",
    async run (message , args) {
        const nord = ["lynnsey.moen@outlook.com:17488173" , "duchland@youmail.dk:ungebravo72" , "dmaritz16@gmail.com:fatbaby1", "walton101@gmail.com:Leeds123" ,    ]
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