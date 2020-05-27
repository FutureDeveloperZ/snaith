module.exports.run = async (client, member, args) => {
    let welcomechannel = member.guild.channels.find(c => c.name === `welcome`);
    if (!welcomechannel) return member.guild.createChannel(c => c.name === "text");
    let username = member.user.username;
    let server = member.guild.name;
    let players = member.guild.memberCount;
    let gbEmbed = new Discord.RichEmbed()
        .setTitle("Good Bye")
        .setDescription("Good Bye" + "``" + username + "``" + ". Hope to see u later")
        .setThumbnail(icon)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("He left At")

    msg.channel.send(gbEmbed);
};