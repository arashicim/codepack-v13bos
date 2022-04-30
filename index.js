const { Client, Message, MessageEmbed, MessageButton, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const token = config.token;


const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} komut var.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`Başarıyla ${props.help.name} adlı komut yüklendi.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});



client.login(token); 
