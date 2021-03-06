import dotenv from "dotenv";

dotenv.config();

export default {
  slack_bot_token: process.env.SLACK_BOT_TOKEN,
  slack_signing_secret: process.env.SLACK_SIGNING_SECRET,
};
