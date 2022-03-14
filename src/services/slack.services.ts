import slackApp from "../../config/slack";
import logger from "../../config/logger";
import http from "./http.service";

// Listen for a slash command /bot invocation and ask how user is doing
slackApp.command(
  "/bot",
  async ({ command, ack, body, payload, view, context }: any) => {
    // Acknowledge the command request
    ack();

    const { data } = await http.post("/api/questions/hau");

    try {
      await slackApp.client.chat.postMessage({
        token: context.botToken,
        // Channel to send message to
        channel: payload.channel_id,
        // Include a button in the message (or whatever blocks you want!)
        blocks: data,
        // Text in the notification
        text: "Message from Test slackApp",
      });
      const bodyFormat = JSON.stringify(body["actions"][0]);
      const responseData = {
        username: body.user.name,
        question: "Welcome. How are you doing?",
        answer: JSON.parse(bodyFormat)["selected_option"]["value"],
      };
      console.log("responseData 1", responseData);

      await http.post("/api/responses", responseData);
    } catch (error) {
      console.error(error);
    }
  }
);

// get favorite hooby
slackApp.action("hau", async ({ ack, body, payload, context }: any) => {
  // Acknowledge the button request
  ack();

  const { data } = await http.post("/api/questions/favs");

  try {
    await slackApp.client.chat.update({
      token: context.botToken,
      // ts of message to update
      ts: body.message.ts,
      // Channel of message
      channel: body.channel.id,
      blocks: data,
      text: "Message from Test slackApp",
    });
    const bodyFormat = JSON.stringify(body["actions"][0]);
    const responseData = {
      username: body.user.name,
      question: "What are your favourite hobby?",
      answer: JSON.parse(bodyFormat)["selected_option"]["value"],
    };
    console.log("responseData 2", responseData);
    await http.post("/api/responses", responseData);
  } catch (error) {
    console.error(error);
  }
});

// end
slackApp.action("favs", async ({ ack, body, context, say }: any) => {
  ack();
  say("thank you");
});

export default async function startSlackService() {
  await slackApp.start(process.env.PORT || 3000);
  logger.info("Slack service is up!");
}
