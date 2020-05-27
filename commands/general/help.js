const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      const helpembed = new MessageEmbed()
      .setTitle('Help List ')
      .addField('Administrator','``\nban``, ``kick``, ``report``, ``poll``, ``purge, ``')
      .addField('NSFW','```\nporn, ecchi, 4k, amateur, anal, ass, asshole, bbw, bdsm, bikinis, blonde, bottomless, brunette, collage, cosplay, curvy, dick, echhi, furrynsfw, gonewild, lewd, nsfw, milf, moreporn, neko, nude, onoff, petite, porn, porngif, public, pussy, redhead, redtube, rule34, snapchat, tattos, tits, uniform```')
      .addField('Roleplay','``\nbite``,``crush``')
      .setColor('#001AFF')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
