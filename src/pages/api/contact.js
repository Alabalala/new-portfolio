export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    const turnstileToken = data["cf-turnstile-response"];
    const SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: "Security validation token missing." }), {
        status: 400,
      });
    }

    const cloudflareUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    const verificationResponse = await fetch(cloudflareUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: turnstileToken,
      }),
    });
    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID;

    const text = `New message from portfolio! 👏\n\n👤 Name: ${name}\n✉️ Email: ${email}\n💬 Message: ${message}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramResponse.ok) {
      const errorDetails = await telegramResponse.text();
      console.error("TELEGRAM REJECTED IT:", errorDetails);
      throw new Error("Telegram API failed");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
};
