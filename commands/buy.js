const db = require('quick.db')
var ps5 = "PS5"
var xbox ="xbox"
var human = "human"
module.exports = {
    name:"buy",
    description:"buyyy",
    async run(message,args){
        let user = message.author
        let author = db.fetch(`money_${message.author.id}`)
        console.log(author)
        if(!args[0]){
            message.channel.send("what a twit ,buy somthing , not nothing")
        }
        if(args[0] === "nord"){
            console.log(args[0])
        if(author < 700){
            message.channel.send("DUMMY YOU NEED 700 COINS")
        } else{
            let item = db.fetch(user.id , { items: [] })
            db.push(user.id , "NORD")
            message.channel.send("you bough a nord for  for 1k coins")
            message.author.send("acc1:Acc1")
            db.subtract(`money_${user.id}` , 700)
        }
    }
    if(args[0] === "idiot"){
        console.log(args[0])
    if(author < 700){
        message.channel.send("DUMMY YOU NEED 600 COINS")
    } else{
        let item = db.fetch(user.id , { items: [] })
        db.push(user.id , "idiot")
        message.channel.send("you bough an idiot  for 600 coins")
        db.subtract(`money_${user.id}` , 600)
    }
}
if(args[0] === human.toLowerCase()){
    console.log(args[0])
if(author < 700){
    message.channel.send("DUMMY YOU NEED 60000 COINS")
} else{
    let item = db.fetch(user.id , { items: [] })
    db.push(user.id , "Human")
    message.channel.send("you bough a useless Human  for 60000 coins")
    db.subtract(`money_${user.id}` , 60000)
}
}
    

    }
   
}