const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
module.exports.run = async (bot, message, args, funcs) => {
  try {
    try {
      const {
        body
      } = await request
        .get("https://www.reddit.com/r/facepalm.json?sort=top&t=week")
        .query({
          limit: 800
        });
      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if (!allowed.length) return funcs.send(`Can't find any other images right now, try again later.`);
      const randomnumber = Math.floor(Math.random() * allowed.length);
      const embed = new MessageEmbed()
        .setColor('#60FF00')
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("Image provided by r/facepalm");
      message.channel.send(embed);
    } catch (e) {
      return message.channel.send(`***Oh no, an error occurred: \`${e.message}\`. Try again later!***`);
    }
  } catch (err) {
    console.log(err);
    funcs.send(`Oh no! An error occurred! \`${err.message}\`.`);
  }
};

module.exports.config = {
  name: "facepalm",
  aliases: [],
  usage: "Use this command to get a facepalm.",
  cooldownTime: '5',
  commandCategory: "reddit"
};