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

    if (!email) {
      return Response.json(
        {
          message: "Email is required",
        },
        {
          status: 400,
        },
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    console.log("Brevo response:", response.status, data);

    if (!response.ok) {
      return Response.json(
        {
          message: data.message || "Brevo subscription failed",
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
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
};
