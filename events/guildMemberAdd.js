let Discord = require("discord.js");

module.exports.run = async(client, member, message, args, funcs) => {
  //Alt checker (7 days old) - Ducky & Wolfkid :) (Hopefully 12/08/18)


  //Update 12/08/18 - Ducky & WolfKid :)
  
   let username = member.user.username;
   let server = member.guild.name;
   let wcEmbed = new Discord.MessageEmbed()
   .setAuthor("Welcome")
   .setDescription("Welcome " + "``" + username + "``" + " To The Official " + server + "Discord!")
   .setTimestamp()
   .setFooter("He Joined at")
  member.guild.channels.cache.find(c => c.name === `・welcome-bye`)
return message.channel.cache.send(wcEmbed);
};
