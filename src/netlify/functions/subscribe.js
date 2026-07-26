export default async (req) => {
  if (req.method !== "POST") {
    return Response.json(
      {
        message: "Method Not Allowed",
      },
      {
        status: 405,
      },
    );
  }

  try {
    const { email } = await req.json();

    const cleanEmail = email?.trim();

    if (!cleanEmail) {
      return Response.json(
        {
          message: "Email is required",
        },
        {
          status: 400,
        },
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!emailIsValid) {
      return Response.json(
        {
          message: "Please enter a valid email address",
        },
        {
          status: 400,
        },
      );
    }

    // eslint-disable-next-line no-undef
    const apiKey = process.env.BREVO_API_KEY;
    // eslint-disable-next-line no-undef
    const listId = Number(process.env.BREVO_LIST_ID);

    // eslint-disable-next-line no-undef
    if (!apiKey || !process.env.BREVO_LIST_ID || Number.isNaN(listId)) {
      console.error("Brevo environment variables are missing or invalid");

      return Response.json(
        {
          message: "Subscription service is not configured correctly",
        },
        {
          status: 500,
        },
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
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

    const data = await response.json();

    console.log("Brevo response status:", response.status);

    if (!response.ok) {
      console.error("Brevo subscription failed:", data);

      return Response.json(
        {
          message: "Unable to subscribe at this time",
        },
        {
          status: response.status,
        },
      );
    }

    return Response.json({
      message: "Successfully subscribed!",
    });
  } catch (error) {
    console.error("Subscription error:", error);

    return Response.json(
      {
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
};
