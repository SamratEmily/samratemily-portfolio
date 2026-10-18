import { PERSONAL_INFO } from "../constants";
import type { ChatMessage } from "../types";

// Odd count keeps the window starting on a user turn (history alternates and ends with the user); the server allows 20
const HISTORY_WINDOW = 19;

const FALLBACK ="The AI assistant is currently resting. Please contact me directly via email at " + PERSONAL_INFO.email + "!";

export async function askAssistant(messages: ChatMessage[]): Promise<string> {
  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messages.slice(-HISTORY_WINDOW) }),
    });
    if (!res.ok) return FALLBACK;

    const data: { text?: string } = await res.json();
    return data.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Assistant request failed:", error);
    return FALLBACK;
  }
}
