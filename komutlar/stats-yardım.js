const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.channel.send(
    new Discord.RichEmbed()
      .setColor("#1e90ff")
      .setTitle("Server Stats")
      .setURL("https://discord.gg/KERamBW")
      .setAuthor(
        "Server Stats",
        "https://cdn.discordapp.com/avatars/669075281239080970/b1f5c365faa05e7140313c4011eef36d.png?size=128"
      )
      .setDescription(
        "Sunucu İstatistiklerini Sunan Bir Botdur.",
        "kurulum / statskapat"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/669075281239080970/49adef407615a48d8953706f605038ac.png?size=2048"
      )
      .addField(
        "kurulum / //kurulum statskapat",
        "Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir."
      )
      .addField("botbilgi", "Bot Hakkında Bilgi Alırsınız!")
      .addField("davet", "Botu Davet Edebilirsiniz!")
      .setTimestamp()
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
