const Discord = require('discord.js');
//const client = new Discord.Client();
const wrapper = require("furry-wrapper");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "e621",
  run: async(client, message, args) =>{
    if (args.join(" ").length < 1) return message.lineReply(`🌱// trata de ingresar algo para que lo busque ${message.author} (puedes buscar como si fuera e621)`)
    if(!message.channel.nsfw) return message.lineReply(`🫠// ¡este comando solo se puede ejecutar en canales nsfw ${message.author}!`)
    let mensaje = message.channel.send
    const { FurryBot, Sheri, E6 } = require("furry-wrapper");
    let page = 0
    var options = {

      TOKEN: "5gKNWJfn5QmvQWzgqBm9wsQV",
      agent: "My Progamme, contact@example.com",
      axiosOptions: {
        timeout: 10000,
           },
        };

    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor; //yoink
    const results = await E6.nsfw(args.join(" "), options)
    console.log(results)
    const embed = createEmbeds(results, client, roleColor, message.author)
    if(!embed) return message.channel.send(`¡No se ha encontrado nada! Trata de buscar como si fuese e621, si necesitas ayuda ejecuta __**:help-e621**__`)
    message.channel.send(embed)
  }
}

function createEmbeds(data, bot, color, author){
 try{
  const embed = new MessageEmbed()

    .setAuthor(`Result:`)
    .setDescription(`<:rem_pin:935684311099777104> **Artist(s):** ${data.tags.artist}\n<a:furr_blossom:837401291155570739> **E621 Post:** *[Post](https://e621.net/posts/${data.id})*\n<:rem_pinkheart:935615029577916427> **Type:** ${data.file.ext}\n<:rem_arrow2:935684310369964083> **Resolution:** ${data.file.width}x${data.file.height}\n<:rem_blankbutterfly:935624476945694750> **Descarga:** *[link](${data.file.url})*\n\n**Información:**\n> **Personaje(s):** \`${data.tags.character}\`\n> **¿Copyright?:** ${data.tags.copyright}\n> **Score:** <:arrowup:945446546462376016> *${data.score.up}* <:arrowdown:945446547154432010> *${data.score.down}* <:arrow:945446545317314591> *${data.score.total}* <:furr_perfect_condition:840657564050915377> *${data.fav_count}*\n> **Rating:** *${data.rating}*\n> **Descripción:** \`${data.description}\` `)
    .setImage(data.file.url)
    .setTimestamp(Date.now())
    .setFooter(`Pedido por ${author.tag} | Para vídeos: e621-video`)
    .setColor(color)

    return embed
  }catch(err){ //Muchisimas gracias Kyro, tqm <3
    return null
  }
}
