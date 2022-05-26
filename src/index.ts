require('dotenv').config();
import { Telegraf } from 'telegraf';
import { getUSD } from './service/api';

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY!);

const TARGET_PRICE = 4.8;

setInterval(async () => {
  const USD = await getUSD();

  if (USD <= TARGET_PRICE) {
    bot.telegram.sendMessage(
      -703863353,
      `O dolinho está: ${USD.toFixed(2)}`,
      {}
    );
  }
}, 60000);

bot.command('start', (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    'hey! send /dolinho and get the dollars price',
    {}
  );
});

bot.command('dolinho', async (ctx) => {
  console.log(ctx.chat.id);
  const dolinho = await getUSD();
  bot.telegram.sendMessage(
    ctx?.chat?.id!,
    `O dolinho está: ${dolinho.toFixed(2)}`,
    {}
  );
});

bot.launch();
