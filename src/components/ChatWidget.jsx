import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChatWidget() {
  const { t } = useTranslation();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setError("");
  }, []);

  async function ask(e) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q })
      });

      const text = await res.text(); // сначала текст, потом пробуем JSON
      let data = null;
      try {
        data = JSON.parse(text);
      } catch {
        // сервер вернул не-JSON (например, упал)
      }

      if (!res.ok) {
        const msg = data?.error ? String(data.error) : text || "Request failed";
        throw new Error(msg);
      }

      if (!data || typeof data.answer !== "string") {
        throw new Error("Non-JSON response from server");
      }

      setAnswer(data.answer);
    } catch (e2) {
      setError(String(e2?.message || "Cannot reach server"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="chat-section">
      <div className="chat-inner">
        <h2 className="chat-title">{t("chat.title")}</h2>

        <form className="chat-form" onSubmit={ask} autoComplete="off">
          <textarea
            className="chat-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            placeholder={t("chat.placeholder")}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />

          <div className="chat-actions">
            <button className="btn chat-btn" type="submit" disabled={loading}>
              {loading ? t("chat.thinking") : t("chat.ask")}
            </button>

            <button
              className="btn ghost chat-btn"
              type="button"
              onClick={() => {
                setQuestion("");
                setAnswer("");
                setError("");
              }}
              disabled={loading && !answer && !question}
            >
              {t("chat.clear")}
            </button>
          </div>
        </form>

        {error && <p className="chat-error">{error}</p>}

        {answer && (
          <div className="chat-answer">
            <div className="chat-answer-title">{t("chat.answer")}</div>
            <pre className="chat-answer-text">{answer}</pre>
          </div>
        )}
      </div>
    </section>
  );
}