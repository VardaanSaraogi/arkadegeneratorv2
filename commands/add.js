const {nordAccs} = require('../accounts.json')
const fs = require('fs', require)
JSON.parse(fs.readFileSync("./accounts.json", "utf8"));
const Discord = require('discord.js')
module.exports = {
    name:"add",
    description:"add",
    async run(message , args) {
  
    fs.readFile(__dirname + "/" + args[0].toLowerCase() + ".json",function(err, data) { 	
        if(err){	
            let newData = nordAccs.push(args[1])
           
            try {	
                fs.writeFileSync(__dirname + "/" + args[0].toLowerCase()+".json", JSON.stringify(newnewData))	
                message.reply("Account added!")	
            } catch {	
                message.channel.send('**Error** add that account!')	

            }   
         }
    
        }
    )}
}
