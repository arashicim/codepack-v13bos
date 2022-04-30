

const discord = require('discord.js'); //modüller
exports.run = async (client, message, args) => {

message.reply({content: "CodePack V13 altyapısı başarıyla çalışmaya başladı." })
message.reply({content: "İyi kullanımlar dileriz." })
};
exports.conf = {
  aliases: ['komut-yanekleri']
};

exports.help = {
  name: "ana-komutismi"
};

