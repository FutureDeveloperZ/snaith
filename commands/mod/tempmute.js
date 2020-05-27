const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.cache.find(role => role.name === config.mutedRole);
  if(!muterole){
    try{
      muterole = await guilds.roles.create({
      	data : { 
        name: "muted",
        color: "#000000",
        permissions:[]
              }
           });
            }catch(e){
      console.log(e.stack);
     }
     }
      
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(mutedRole));
  message.reply(`<@${mutedRole}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(mutedRole);
    message.channel.send(`<@${mutedRole}> has been unmuted!`);
  }, ms(mutetime));


}

module.exports.help = {
  name: "tempmute"
}
