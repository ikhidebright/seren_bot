const { App } = require("@slack/bolt");
import config from "config";

const slackApp = new App({
  token: config.get<string>("slack_bot_token"),
  signingSecret: config.get<string>("slack_signing_secret"),
});

export default slackApp;
