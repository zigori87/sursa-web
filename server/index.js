const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT || 8787;

if (!process.env.OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY is missing in server/.env");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const systemPromptPath = path.join(__dirname, "system_prompt.txt");
const systemPrompt = fs.readFileSync(systemPromptPath, "utf8");

// health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// main chat endpoint
app.post("/api/ask", async (req, res) => {
  try {
    const question = String(req.body?.question || "").trim();
    if (!question) {
      return res.status(400).json({ error: "question is required" });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question }
      ]
    });

    res.json({ answer: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server_error" });
  }
});

app.listen(PORT, () => {
  console.log(`SURSA server running at http://localhost:${PORT}`);
});