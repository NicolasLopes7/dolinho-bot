import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { getUSD } from './api';

export default [
  {
    name: 'start',
    handler: (bot: Telegraf) => (ctx: Context<Update>) => {
      bot.telegram.sendMessage(
        ctx?.chat?.id!,
        'hey! send /dolinho and get the dollars price',
        {}
      );
    },
  },
  {
    name: 'dolinho',
    handler: (bot: Telegraf) => async (ctx: Context<Update>) => {
      const dolinho = await getUSD();
      bot.telegram.sendMessage(
        ctx?.chat?.id!,
        `O dolinho está: ${dolinho.toFixed(2)}`,
        {}
      );
    },
  },
];
