/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const client = require('nekos.life');
const neko = new client();


 module.exports = {
     name:"boobs",
     description:"i see",

     async run (client,message, args){
/*   Made by Mr Swift  */
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")


        message.channel.startTyping();
        neko.nsfw.boobs().then(neko => {
            message.channel.send(`${neko.url}`)
        });
       
        message.channel.stopTyping();
        
        console.log('Boobs [1]')
     }
 }
 