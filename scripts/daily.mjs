const url = process.env.DISCORD_WEBHOOK_URL;
const content =
  "Good morning, folks! What did you work on yesterday, and what are you going to work on today?";

if (!url) {
  console.error("Missing DISCORD_WEBHOOK_URL (set it in GitHub repo Secrets).");
  process.exit(1);
}

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ content }),
});

const text = await res.text();
if (!res.ok) {
  console.error("Discord webhook failed:", res.status, text);
  process.exit(1);
}

console.log("Posted to Discord OK.");
