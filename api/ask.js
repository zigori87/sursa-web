// api/ask.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// читаем system_prompt.txt один раз на cold start
const systemPromptPath = path.join(__dirname, "system_prompt.txt");
const systemPrompt = fs.readFileSync(systemPromptPath, "utf8");

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "method_not_allowed" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "OPENAI_API_KEY_missing" });
    }

    // Vercel иногда даёт body строкой — делаем безопасно
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const question = String(body?.question ?? "").trim();
    if (!question) {
      return res.status(400).json({ error: "question_is_required" });
    }

    const openai = new OpenAI({ apiKey });

    const response = await openai.responses.create({
      // ВАЖНО: модель должна существовать в твоём списке /v1/models
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
    });

    return res.status(200).json({ answer: response.output_text ?? "" });
  } catch (err) {
    // Пытаемся вытащить понятную причину из ошибки OpenAI
    const status = err?.status || 500;
    const msg =
      err?.error?.message ||
      err?.response?.data?.error?.message ||
      err?.message ||
      "unknown_error";

    console.error("api/ask error:", err);

    return res.status(status).json({
      error: "server_error",
      details: msg,
    });
  }
}