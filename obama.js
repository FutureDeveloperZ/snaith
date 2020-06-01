const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Canvas = require("canvas");
const fs = require("fs");
const config = require(`./config.json`);
const prefix = config.prefix;

client.commands = new Discord.Collection();
client.afk = new Map();

client.once('ready', () => {
	console.log('AddMember working!');
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'logs');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./resources/canvas/wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunc.run(client, ...args));
  });
});

fs.readdir(`./commands`, (err, directories) => {
  if (err) return console.error(error);
  directories.forEach(directory => {
    fs.readdir(`./commands/${directory}`, (e, files) => {
      if (e) return console.error(e);
      files.forEach(file => {
        const eventFunc = require(`./commands/${directory}/${file}`);
        let eventName = file.split(".")[0];
        client.commands.set(eventName, eventFunc);
      });
    });
  });
});

client.login(process.env.BOT_TOKEN);