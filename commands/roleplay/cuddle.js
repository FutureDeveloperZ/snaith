const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, funcs) => {
  try {
      let whotto = message.mentions.members.first();
      if (!whotto) return message.reply(`Please mention somebody to cuddle!`);
      if (whotto.id == message.author.id) return message.reply(`Ummm.. I am not sure if you can cuddle yourself..`);
      let embed = new MessageEmbed()
        .setImage("https://media.giphy.com/media/nTeeb8thSiS0U/giphy.gif")
        .setColor("#FF003E")
        .setTitle(`${whotto.user.username}, you got a cuddle from ${message.author.username}, uwu owo.`);
      message.channel.send(embed);
  } catch (err) {
    console.log(err) 
    return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
};

module.exports.config = {
  name: "cuddle",
  aliases: [],
  usage: "Use this command to cuddle somebody.",
  commandCategory: "roleplay",
  cooldownTime: '5'
};