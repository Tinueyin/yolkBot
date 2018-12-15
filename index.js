"use strict";

let express, expressApp, env, bot, ngrok, url;

/*
const setup = () => {
  express = require("express");
  expressApp = express();
  env = require("./env.json");
  bot = require("./bot").bot;

  bot.telegram.setWebhook(process.env.NOW_URL);
};*/

//setup();
express = require("express");
expressApp = express();
env = require("./env.json");
bot = require("./bot").bot;
expressApp.use(bot.webhookCallback("/yolk-bot"));
bot.telegram.setWebhook(`${env.CALLBACK_URL}/yolk-bot`);

expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});

expressApp.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
