import slackApp from "../../config/slack";
import logger from "../../config/logger";

// Listen for a slash command /bot invocation and ask how user is doing
slackApp.command("/bot", async ({ ack, payload, context }: any) => {
  // Acknowledge the command request
  ack();

  console.log("contextcontextcontext", context, payload);

  try {
    const result = await slackApp.client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          block_id: "section678",
          text: {
            type: "mrkdwn",
            text: "Welcome. How are you doing?",
          },
          accessory: {
            action_id: "text1234",
            // NOTE: We can change type to external_select (to fetch options from an api as user types)
            type: "static_select",
            placeholder: {
              type: "plain_text",
              text: "Select how you're doing",
            },
            options: [
              {
                text: {
                  type: "plain_text",
                  text: "Doing Well",
                },
                value: "value-0",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Neutral",
                },
                value: "value-1",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Feeling Lucky",
                },
                value: "value-2",
              },
            ],
          },
        },
      ],
      // Text in the notification
      text: "Message from Test slackApp",
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

// get favorite hooby
slackApp.action("text1234", async ({ ack, body, context }: any) => {
  // Acknowledge the button request
  ack();

  console.log("contextcontextcontext", context, body);

  try {
    // Update the message
    const result = await slackApp.client.chat.update({
      token: context.botToken,
      // ts of message to update
      ts: body.message.ts,
      // Channel of message
      channel: body.channel.id,
      blocks: [
        {
          type: "section",
          block_id: "section678",
          text: {
            type: "mrkdwn",
            text: "What are your favorite hobbies?",
          },
          accessory: {
            action_id: "text123456",
            type: "multi_static_select",
            placeholder: {
              type: "plain_text",
              text: "Select favorite hobbies",
            },
            options: [
              {
                text: {
                  type: "plain_text",
                  text: "Football",
                },
                value: "value-0",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Music",
                },
                value: "value-1",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Sleep",
                },
                value: "value-2",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Movies",
                },
                value: "value-3",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Basketball",
                },
                value: "value-4",
              },
            ],
          },
        },
      ],
      text: "Message from Test slackApp",
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

// end
slackApp.action("text123456", async ({ ack, body, context, say }: any) => {
  ack();
  say("thank you");
});

export default async function startSlackService() {
  await slackApp.start(process.env.PORT || 3000);
  logger.info("Slack service is up!");
}
