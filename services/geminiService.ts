import { PERSONAL_INFO } from "../constants";

const FALLBACK = "The AI assistant is currently resting. Please contact me directly via email at " + PERSONAL_INFO.email + "!";

export async function askAssistant(prompt: string): Promise<string> {
  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    if (!res.ok) return FALLBACK;

    const data: { text?: string } = await res.json();
    return data.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Assistant request failed:", error);
    return FALLBACK;
  }
}
