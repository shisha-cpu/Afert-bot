const TelegramBot = require('node-telegram-bot-api');
const token = '7528483883:AAHmaABfsF6E29iTuyUOR5WGV95ltmQl-OE';
const bot = new TelegramBot(token, {polling: true});

// const adminChatId = '1137493485';
const adminChatId = '197876343'; 

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
          { text: 'Договор услуги', url: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F69nw1otFLpxsqdnPUR1lSzax2VTa6NhQwgYcb2wNV3kTfXwXUZ7phoRcElJFM1I0q%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FДоговор%20субаренды.docx&name=Договор%20субаренды.docx' }
        ],
        [
          { text: 'Договор субаренды', url: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F69nw1otFLpxsqdnPUR1lSzax2VTa6NhQwgYcb2wNV3kTfXwXUZ7phoRcElJFM1I0q%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FДоговор%20услуги%20.docx&name=Договор%20услуги%20.docx' }
        ],
        [
          { text: 'Оферта и Политика данных ознакомлен ✅', callback_data: 'offer_acknowledged' }
        ],
        [
          { text: 'Услуги ознакомлен ✅', callback_data: 'service_acknowledged' }
        ],
        [
          { text: 'Субаренда ознакомлен ✅', callback_data: 'sublease_acknowledged' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Пожалуйста, ознакомьтесь с документами по ссылкам ниже и подтвердите ознакомление:', options);
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const username = query.from.username || 'пользователь';

  if (query.data === 'offer_acknowledged') {
    bot.sendMessage(chatId, 'Ваше согласие с Офертой и Политикой данных получено ✅');
    bot.sendMessage(adminChatId, `Пользователь @${username} (ID: ${chatId}) согласен с Офертой и Политикой данных.`);
  }

  if (query.data === 'service_acknowledged') {
    bot.sendMessage(chatId, 'Ваше согласие с Договором услуг получено ✅');
    bot.sendMessage(adminChatId, `Пользователь @${username} (ID: ${chatId}) согласен с Договором услуг.`);
  }

  if (query.data === 'sublease_acknowledged') {
    bot.sendMessage(chatId, 'Ваше согласие с Договором субаренды получено ✅');
    bot.sendMessage(adminChatId, `Пользователь @${username} (ID: ${chatId}) согласен с Договором субаренды.`);
  }
});
