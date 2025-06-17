import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { error } from "@sveltejs/kit";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
});

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const first_name = formData.get("firstName") as string;
    const last_name = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const station = formData.get("station") as string;

    if (!first_name || !last_name || !station) {
      throw error(400, "Missing required info");
    }

    const command = new PutCommand({
      TableName: "path-pledge",
      Item: {
        id: uuidv4(),
        first_name,
        last_name,
        station,
        timestamp: Date.now(),
      },
    });

    try {
      await client.send(command);
      return { success: true };
    } catch (err) {
      console.error("DynamoDB error: ", err);
      throw error(500, "Failed to save to database");
    }
  },
};
