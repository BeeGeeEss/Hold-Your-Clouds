export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || "{}");

    const cleanEmail = email?.trim();

    if (!cleanEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" }),
      };
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!emailIsValid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Please enter a valid email address" }),
      };
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !listId) {
      console.error("Missing Brevo environment variables");
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Subscription service is not configured correctly",
        }),
      };
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: cleanEmail,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const brevoData = await brevoResponse.json();

    console.log("Brevo response:", brevoResponse.status, brevoData);

    if (!brevoResponse.ok) {
      return {
        statusCode: brevoResponse.status,
        body: JSON.stringify({
          message: brevoData.message || "Unable to subscribe at this time",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully subscribed!" }),
    };
  } catch (error) {
    console.error("Subscription error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong. Please try again later.",
      }),
    };
  }
}
