const Discord = require('discord.js');
//const client = new Discord.Client();
const wrapper = require("furry-wrapper");
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "yiffgay",
  aliases: ["g.yiff", "gayiff", "gay.yiff", "sex.gay"],
  run: async(client, message, args) =>{

    if(!message.channel.nsfw) return message.lineReply(`🫠// ¡este comando solo se puede ejecutar en canales nsfw ${message.author}!`)

    let mensaje = message.channel.send
    const { FurryBot, Sheri, E6 } = require("furry-wrapper");
    let page = 0

    var options = {
      // Allows you to pass in a token through the authorization header
      //token: "5gKNWJfn5QmvQWzgqBm9wsQV",
      //Authorization: "OGhZVFNVRms6OGhZVFNVRms=",
      // The exact same as `token`
      //auth: "OGhZVFNVRms6OGhZVFNVRms=",
      TOKEN: "5gKNWJfn5QmvQWzgqBm9wsQV",
      // Use your own custom user agent. User agent will always default to your Node.js version and OS name if no agent is provided
      agent: "My Progamme, contact@example.com",
      // Allows you to apply your own axios options whenever axios is used.
      axiosOptions: {
        // Sets a specific amount of time in milliseconds that axios will wait until the requested server responds.
        timeout: 1000,
        // You can find other axios options at https://github.com/axios/axios#request-config
      },
    };

    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor; //yoink

    const results = await E6.nsfw('rating:explicit -female score:>=200 -type:webm -type:swf', options)
    //kyro coder, pro
    console.log(results)
    const embed = createEmbeds(results, client, roleColor, message.author)
    if(!embed) return message.channel.send(`Un error ha ocurrido al intentar general el embed`)

    message.channel.send(embed)
  }
}
function createEmbeds(data, bot, color, author){
  const embed = new MessageEmbed()
  .setDescription(`🌟... **Artista(s):** ${data.tags.artist}\n✨// **Descarga:** *[Archivo](${data.file.url}).${data.file.ext}*`)
  .setImage(data.file.url)
  .setTimestamp(Date.now())
  .setFooter(`Pedido por ${author.tag} | Tip: Para vídeos utiliza e621-video`)
  .setColor(color)

  return embed
}