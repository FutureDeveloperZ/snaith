const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {      
	message.channel.startTyping();
      const helpembed = new MessageEmbed()
      .setTitle('Help List ')
      .addField('Administrator','``\nban``, ``kick``, ``report``, ``poll``, ``purge``')
      .addField('NSFW','``\nporn``, ``ecchi``, ``4k``, ``amateur``, ``anal``, ``ass``, ``asshole``, ``bbw``, ``bdsm``, ``bikinis``, ``blonde``, ``bottomless``, ``brunette``, ``collage``, ``cosplay``, ``curvy``, ``dick``, ``echhi``, ``furrynsfw``, ``gonewild``, ``lewd``, ``nsfw``, ``milf``, ``moreporn``, ``neko``, ``nude``, ``onoff``, ``petite``, ``porn``, ``porngif``, ``public``, ``pussy``, ``redhead``, ``redtube``, ``rule34``, ``snapchat``, ``tattos``, ``tits``, ``uniform``')
      .addField('Roleplay','``\nbite``,``crush``,``cuddle``,``dropkick``')
      .addField('Memes','``\nmeme``,``dankmemes``,``facepalm``')
      .addField('Miscellaneous ','``\nembed``,``whois``')
      .setColor('#001AFF')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);
     
    } catch (e) {
      return message.channel.send(`***Oh no, an error occurred: \`${e.message}\`. Try again later!***`);
    }
    return message.channel.stopTyping();
  } catch (err) {
    console.log(err);
    message.reply(`Oh no! An error occurred! \`${err.message}\`.`);
  }
  
module.exports.help = {
  name: "help"
}
