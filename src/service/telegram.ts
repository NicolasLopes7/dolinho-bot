import { Telegraf } from 'telegraf';
import { getUSD } from './api';

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY!);

bot.command('start', (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    'hey! send /dolinho and get the dollars price',
    {}
  );
});

bot.action('dolinho', async (ctx) => {
  const dolinho = await getUSD();
  bot.telegram.sendMessage(
    ctx?.chat?.id!,
    `O dolinho está: ${dolinho.toFixed(2)}`,
    {}
  );
});
