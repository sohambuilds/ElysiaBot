
const token = process.env.token;
const prefix = "/"
const Discord = require("discord.js");


var client =  new Discord.Client({disableEveryone: true})




client.on("ready", async () => {

    



    console.log(  "I am READY!")

    setInterval(function() {

        let activities = [`${client.guilds.size} server and ${client.users.size} slaves` , `Dev: BlazingDragon(iDragonDude)` ,  '/help for help ']

       let activity = activities[Math.floor(Math.random()*activities.length)]
       
       let numberomembers = `${client.users.size}`

       client.user.setActivity(activity, { type: "LISTENING"})
    }, 5000)


})
    



 const fs = require("fs");
 client.msgs = require("./msgs.json");

 

client.on ("message" , (message) => {


    var server = message.guild;


    if (message.channel.type === 'dm') {

      if (message.author.bot) return;

         client.users.get("324442848759906314").send(`${message.author.username}: ${message.content}`);
         message.author.send("Ight,imma send that to Blazing.My DMs r closed kiddo.If you wanna contact modmail,type */help* inside the Relics Elysia server.")

    
    return;}

    
    console.log(message.author.username);
    console.log(message.content);
    message.content = message.content.toLowerCase();
    mention = message.mentions.users.first();
    if (message.author.bot) return;
    if (message.content.startsWith (prefix + "hello")){
        message.reply ('Hi!')
    }
    if (message.content.startsWith (prefix + "hi")){
        message.reply ('Sup Dup Sup Sup!')

    }
    if (message.content.startsWith (prefix + "yo")){
        message.reply ('Yo,wassup!!')

    }
    if (message.content.includes ("goose")){
        message.channel.send ("Quack quack!!??!!?!")

    }
    if (message.content.includes ("knock knock")){
        message.channel.send ("Who is THERE?")
    }
    if (message.content.includes ("pandu")){
        message.channel.send ("OHH MA LAWD,HE COMINNNNN!!")
    }
    
   

    if (message.content.startsWith(prefix + "write")){

        editedmessage = message.content.slice (6);
        
        client.msgs [message.author.username] = {

            message: editedmessage
        }
        fs.writeFile ("./msgs.json" , JSON.stringify (client.msgs, null, 4), err => {
            if(err) throw err;
            message.channel.send ("message written") ;
        });
    }
    

    if (message.content.startsWith(prefix + "get")){

        let _message = client.msgs[message.author.username].message;
        message.channel.send ("message is :" + _message);
    }



    if (message.content.startsWith(prefix + "send")){
        
        
        if (mention == null){return;}
       
        message.delete();
        mentionMessage = message.content.slice (5);
        mention.send (`${message.author.username}: ${mentionMessage}`);
        message.channel.send("done!");

        




    
    }

    if(message.content.startsWith(prefix + "asay")){

        asaymessage = message.content.slice(6)
        message.delete()

        message.channel.send(asaymessage)




    }
    






    if (message.content.startsWith(prefix + "say")){

        saymessage = message.content.slice(5);
        message.delete();


        message.channel.send(`${message.author.username}: ${saymessage}`)



    }
    if (message.content.startsWith(prefix + "help")){

        

       
        message.channel.send("Created a new modmail thread")

        server.createChannel(`modthread:${message.author.username}` , {
          type: 'text',


          permissionOverwrites: [

            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']


            },
            {
                id: message.author.id,
                allow:  ['VIEW_CHANNEL']



            },
            {
                id: '729659386347126846',
                allow: ['VIEW_CHANNEL']


            },
            {
                id: '728209092421877819',
                allow: ['VIEW_CHANNEL']
            



            },
            {
                id: '728209092430004234',
                allow: ['VIEW_CHANNEL']





            }


          ]



        }).then(channel =>{
            channel.send(`<@&729659386347126846> <@${message.author.id}> needs help!`)
        })

       


        
        



    }
if (message.content.startsWith(prefix + 'spam')){

   

    if (message.channel.id != '728209093092966411'){

        message.channel.send("LMAO /ban time")

        return
    }
    if(!message.mentions.users.first()){

        message.delete();


      for(var i = 0;i<30;i++){
         spammessage =  message.content.slice(5)
          message.channel.send(spammessage)


      }}
    else{
           message.channel.send("lmao u tried")
       }



}
    
if (message.content.startsWith(prefix + 'close')){

    if (message.channel.name.startsWith("modthread")){

        message.channel.delete();


    }
    else
    {message.channel.send("NO U")


    }


}
if (message.content.startsWith(prefix + 'members')){

    message.channel.send(`Currently,we have ${numberomembers} slaves in here!!!!`)


}


                      

});

client.on('guildMemberAdd' , member => 
{

member.send(`Welcome to the Relics Elysia Server, ${member}! :tada: Make sure you check out our official Relics Elysia club in Brawl Stars,and join us in if you're looking for a NOICE,active and friendly club! Also,make sure u send a screenshot of your profile in the verification channel if you aren't already verified in a relics server!


 `);
 client.guilds.get('728209092375740496').channels.get('728209093092966413').send(`<@${member.id}> has joined the server :tada: !!!Now the server has ${client.users.size} members!`)





}




);

client.login (token);

