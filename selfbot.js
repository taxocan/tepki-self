const Discord = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Discord.Client({
  checkNamespam: true,
  checkSelfbot: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

client.on('messageCreate', (message) => {
  const specificUserIds = ['1303337994719334480']; //örnek kullanımı const specificUserIds = ['123123','123123123123'];
  const emojis = ['🔞','📛','🥰','😘']; // önrnek kullanım const emojis = ['😊','🤣'];

  if (message.author.id === client.user.id) return;

  if (specificUserIds.includes(message.author.id)) {
    emojis.forEach(emoji => message.react(emoji));
  }
});

client.login('MTMwMzMzNzk5NDcxOTMzNDQ4MA.G2mcI1.w_Ch4pmJR0ljfISzfIwh5Xy8nbMTaHr4C1rBwY'); // npm i discord.js-selfbot-v13
// npm i discord.js-selfbot-v13
// npm i discord.js-selfbot-v13
// npm i discord.js-selfbot-v13
