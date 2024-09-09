const TelegramBot = require('node-telegram-bot-api');
const token = '7528483883:AAHmaABfsF6E29iTuyUOR5WGV95ltmQl-OE';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Договор оферты и Политика данных', url: 'https://disk.yandex.ru/d/bTxBqtCo-Cqfig' }
        ],
        [
          { text: 'Пожарная и техника безопасности', url: 'https://disk.yandex.ru/d/bTxBqtCo-Cqfig' }
        ],
        [
          { text: 'Ознакомлен ✅', callback_data: 'acknowledged' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Пожалуйста, ознакомьтесь с документами по ссылкам ниже:', options);
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  if (query.data === 'acknowledged') {
    bot.sendMessage(chatId, 'Ваше согласие получено ✅');
  }
});
