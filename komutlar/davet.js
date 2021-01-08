const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: İşte Davet Linkim",
    url: "https://is.gd/Abdullah7100",
    description: "Bot Davet Linki",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botu Davet Edebilirsiniz!',
  usage: 'davet'
};