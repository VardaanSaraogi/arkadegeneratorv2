

module.exports = {
name:"test",
value:"test",
async run(message , args){
    message.channel.send(args[0])
}

}