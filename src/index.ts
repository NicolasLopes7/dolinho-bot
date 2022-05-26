require('dotenv').config();
import { Telegraf } from 'telegraf';
import commands from './service/telegram-commands';
import schedulers from './service/schedulers';
import { injectTelegramBot } from './utils/injectTelegramBot';

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY!);
const inject = injectTelegramBot(bot);

const telegramCommands = commands.map(inject);
const telegramSchedulers = schedulers.map(inject);

telegramSchedulers.forEach((scheduler) =>
  setInterval(scheduler.handler, scheduler.time * 1000)
);

telegramCommands.forEach((command) =>
  bot.command(command.name, command.handler)
);

bot.launch();
