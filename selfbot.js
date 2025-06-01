const Discord = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

// AYARLARINI BURADA BELİRLE
const targetGuildId = 'SUNUCU_ID'; // örnek: '123456789012345678'
const targetChannelId = 'KANAL_ID'; // örnek: '987654321098765432'
const emojis = ['🔥', '❤️']; // istediğin emojileri buraya yaz

client.on('messageCreate', (message) => {
  // Bot kendi mesajlarına tepki vermesin
  if (message.author.id === client.user.id) return;

  // Yalnızca belirli sunucu ve kanal için çalışsın
  if (
    message.guild &&
    message.guild.id === targetGuildId &&
    message.channel.id === targetChannelId
  ) {
    emojis.forEach((emoji) => {
      message.react(emoji).catch(console.error);
    });
  }
});

client.login('TOKENİNİ_BURAYA_KOY'); // Uyarı: Kullanıcı token'ını girme riski sana aittir
