const Discord = require('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help-e621",
  aliases: ["h-e621", "h-e", "h-e621.net", "how-to-search"],
  run: async(client, message, args) =>{

     const roleColor =
     message.guild.me.displayHexColor === "#000000"
     ? "#ffffff"
     : message.guild.me.displayHexColor;
   
    const embed = new Discord.MessageEmbed()
    .setTitle('[༊];─ Cómo buscar en e621 con Vamp :bookmark_tabs:')
    .setAuthor('By Owen Kuznetsov <3')
    .setDescription(`• • ︵︵︵︵︵╭ (  :round_pushpin:  ) ╮︵︵︵︵︵ • •\nComo se indica con la búsqueda e621, puedes buscar como si fuera la misma página (Introduce tags específicos, tipos de formato y resolución, haz que deniegue X posts con X etiquetas, etc.)\n\nEjemplo: **loona_(helluva_boss) -female -intersex score:>=100**\nY busca posts de Loona sin que se muestren mujeres, trans (?) y con un score arriba de 100.\nAl introducir un tag mal o no lanza nada significa que no ha encontrado nada y deberás esperar unos segundos para volver a búscar (Asegurate de búscar bien, cuando encuentra un post no se necesita esperar)\n> Si necesitas más ayuda puedes consultar **[la página de ayuda de búsqueda de e621](https://e621.net/help/cheatsheet)**.\n\n*feliz paja (?)* :email: ‧₊° “\n:watermelon: ；                   ────────────`)
    .setImage('https://cdn.discordapp.com/attachments/938266095989698590/1074113308174598154/A9QKRJpgZGkQAAAABJRU5ErkJggg.png')
    .setFooter(`Pedido por ${message.author.tag}`)
    .setColor(roleColor)

    message.channel.send(embed)

  }
}