import { Telegraf } from 'telegraf';

export const injectTelegramBot =
  (bot: Telegraf) =>
  (iterable: any) => ({
    ...iterable,
    handler: iterable.handler(bot),
  });
