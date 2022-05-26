import { Telegraf } from 'telegraf';
import { getUSD } from './api';

export default [
  {
    time: 60,
    handler: (bot: Telegraf) => async () => {
      const USD = await getUSD();

      if (USD <= 5) {
        bot.telegram.sendMessage(
          -703863353,
          `O dolinho está: ${USD.toFixed(2)}`,
          {}
        );
      }
    },
  },
];
