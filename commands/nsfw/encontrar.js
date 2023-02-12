const Discord = require('discord.js');
//const client = new Discord.Client();
const r34API = require('r34.api')
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "test",
  run: async(client, message, args) =>{

async function getPic() {
    let image = await r34API.rule34(['furry'])
    message.channel.send(image)
}

getPic()

  }
}