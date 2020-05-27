const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Usage: f;purge (number of messages ex. 2000)");
  if(!args[0]) return message.channel.send("Usage: f;purge (number of messages ex. 100)");
    message.channel.bulkDelete(Number(args[0])+1).then(() => {
        message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(3000));
        
});

}

module.exports.help = {
  name: "purge"
}
