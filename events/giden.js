//---Bu Kod giden.js events klasörüne atılacak atılacaktır.
const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {  
   var randomMsg = [
                    "Güle Güle"
                    ];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]
  
  let paket = await db.fetch(`pakets_${member.id}`)
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  let msj = await db.fetch(`cikisM_${member.guild.id}`)
  if (!msj) msj = `{uye}, ${randomMsg_integer}`
  
  
  const canvas = Canvas.createCanvas(360, 250);
 const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/598737609501704212/641064444365111319/CodeMarefi-giden.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
 ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = `#D3D3D3`;
 ctx.font = `25px "Warsaw"`;
 ctx.textAlign = "center";
 ctx.fillText(`${member.user.username.toUpperCase()}`, 170, 210);
  
  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
 const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
 ctx.lineWidth = 4;
  ctx.fill()
 ctx.lineWidth = 4;
 ctx.clip();
 ctx.drawImage(avatar, 112, 55, 110, 110);
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'CodeMarefi.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj.replace('{uye}', member).replace('{sunucu}', member.guild.name));
  if (member.user.bot) return member.guild.channels.get(memberChannel).send(`🤖 Bu bir bot, ${member.user.tag}`)
  
}