const { MessageEmbed }= require('discord.js');
const config = require('../../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.id !== `${config.ownerid}`) return errors.ownersOnly(message);

  if (message.author.id == `${config.ownerid}`) {
    let embed = new MessageEmbed()
      .setTitle('Shutting Down Boi...')
      .setColor(config.red);

    message.channel.send(embed)
      .then(message => client.destroy())
  }
}

module.exports.help = {
  name: 'shutdown'
};