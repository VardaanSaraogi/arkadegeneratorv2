const reqEvent = (event) => require(`../events/${event}`)

module.exports = async  bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    
 }