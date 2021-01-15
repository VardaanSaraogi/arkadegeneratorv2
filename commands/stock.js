const Discord = require('discord.js')
const {nordAccs} = require('../accounts')
module.exports = {
    name:"stock",
    description:"stonkssss",
    async run(message,args) {
        var nordLength = nordAccs.length
        const stonks = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Accounts')
        .addFields(
            {name:"Nord Accounts:" , value :nordLength}
        )
        message.channel.send(stonks)
    }
}