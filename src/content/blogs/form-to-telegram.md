---
title: "Ditch the inbox, use Telegram - A guide"
summary: "Want to learn how to set up Telegram as your contact form receiver? Here's how."
date: 2026-05-15
cover: "/blogs/form-to-telegram/cover.png"
locale: "en"
---

I was recently applying to jobs when I realised the contact form of my website was not working. I had set it up with formsubmit.co because I loved how easy it was to use and the different customisation options. However, it has been down multiple times while I was applying to jobs and I needed it to be up. You can imagine as a web developer, having a contact form that doesn't work on your website can have a devastating impact on your hiring chances or client capture.

I have used different services from emailJS, to SMTPs, mail APIs, etc. Always looking for reliable but cost-reduced options, I sat down to explore what other alternatives I had. Then it hit me. Telegram! I didn't mind not having the messages as emails in my Gmail app. In fact, I liked the idea of having all received messages in one place better. After setting it up and testing it, I'm not going back. And I'm going to give you the steps to do it yourself easy & for free.

---

## **1. Create the bot (< 1 minute)**

This is the easiest part.

Go to Telegram, search for **@BotFather** (with the blue check) and type `/newbot`. It will ask you to name the bot and once you're done, you'll have your own bot.

BotFather will give you a HTTP API token. Save it somewhere secure, we'll need it later.

> ⚠️ **DO NOT SHARE THIS WITH ANYONE, EVER.**

---

## **2. Get your telegram chat ID**

The easiest way is directly through the Telegram API:

1. Open your bot in Telegram and send it any message (e.g. `/start`).
2. Visit the following URL in your browser (replace `<TOKEN>` with your bot token):
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
3. Look for `"chat": { "id": XXXXXXXXX }` in the response. That number is your **Chat ID**.

Copy it and save it somewhere secure.

> Alternatively, you can use **@userinfobot** on Telegram (type `/start`) to get your chat ID directly.

Time to go to your codebase.

---

## **3. Create secrets**

Create an env file if you don't already have one and add 2 variables with the info you saved earlier:

```env
TELEGRAM_BOT_TOKEN=your_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

You also need to make sure you add these secrets to your hosting provider.

> ⚠️ Make sure `.env*` is in your `.gitignore` file so the secrets are not uploaded to GitHub.

---

## **4. Create API**

Note: this is a generic Node.js API call. If you use certain frameworks you might need to change it a bit.

```js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { name, email, message } = req.body;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // This part you can customise entirely to your liking and the specific data you get from your form.
  const text =
    `*You've got a new form submission!*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📧 *Email:* ${email}\n` +
    `💬 *Message:* ${message}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const telegramRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramRes.ok) {
      throw new Error(`Telegram API error: ${telegramRes.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
```

---

## **5. Your frontend**

```html
<form id="contact-form">
  <input type="text" id="name" name="name" placeholder="Your Name" required />
  <input type="email" id="email" name="email" placeholder="Email" required />
  <textarea id="message" name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>

<script>
  document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent!");
      e.target.reset();
    } else {
      alert("Something went wrong.");
    }
  };
</script>
```

This is a basic template but you can adapt it to your needs/frameworks. I recommend adding for example Cloudfare's turnstile for human verification. If you wanna see how I did it, check out my portfolio repo.

---

## **6. Start your bot and test**

Go to your bot chat and type `/start`. Now try and submit a message from your form. Ta-da!

---

## **Q&A**

**Is this safe?**  
Yes. As long as you keep your secrets safe, this setup is highly secure because it's one way from server to server. Thanks to the `CHAT_ID` you make sure the messages go to you and only you.

**What happens if a random stranger finds my bot on Telegram and sends it a message? Will they see my form submissions?**  
No. `CHAT_ID` is unique to your conversation. When the website triggers the message, Telegram delivers it straight to you.

**Is there a limit to how many messages my contact form can send per day?**  
Yes, but it's quite high — around 20 messages per minute. For a contact form this is effectively irrelevant in normal use.
