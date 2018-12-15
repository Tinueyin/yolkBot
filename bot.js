"use strict";

//============imports
const Telegraf = require("telegraf");
const env = require("./env.json");

//=======instances
const bot = new Telegraf(env.BOT_TOKEN);


bot.command("help", ctx => {
  const reply = `
..................${"***Bot Usage***"}..................
============================
This is Yolk

Bot commands:
/start, /help

Bot operations:
`;
  ctx.replyWithMarkdown(reply);
});



bot.command("hello", ctx =>
  ctx.reply("Hello!")
);

bot.on("new_chat_members", ctx => ctx.reply(`Welcome ${ctx.from.username}`))


module.exports = {
  bot: bot
};
