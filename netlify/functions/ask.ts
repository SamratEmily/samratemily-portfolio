import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS, PERSONAL_PROJECTS, ACHIEVEMENTS, PROBLEM_SOLVING, EDUCATION } from "../../constants";
import type { ChatMessage } from "../../types";

const MAX_MESSAGE_LENGTH = 1000;
// Earlier model replies are echoed back as history; 500 output tokens can exceed 1000 characters
const MAX_REPLY_LENGTH = 4000;
const MAX_HISTORY = 20;

const context = `
You are an AI career assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.
Here is his background:
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.duration})`).join('. ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('. ')}
Professional Projects: ${PROJECTS.map(p => `${p.title} - ${p.description}`).join(' ')}
Personal Projects: ${PERSONAL_PROJECTS.map(p => `${p.title} - ${p.description}`).join(' ')}
Problem Solving: ${PROBLEM_SOLVING.problemsSolved} problems solved on ${PROBLEM_SOLVING.onlineJudges.join(', ')}. ${PROBLEM_SOLVING.contests} ${PROBLEM_SOLVING.onlineContests}.
Achievements: ${ACHIEVEMENTS.map(a => `${a.rank} in ${a.contest}`).join(', ')}.
Education: ${EDUCATION.shortDegree} in ${EDUCATION.field} from ${EDUCATION.institution} (CGPA ${EDUCATION.cgpa}/${EDUCATION.cgpaScale}).
Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.linkedin}

Your goal is to answer questions from recruiters or potential collaborators professionally as if you represent Samrat's team. Keep answers concise, helpful, and technically accurate based on the provided data. Politely decline questions unrelated to Samrat's professional background.
`;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const isValidHistory = (messages: unknown): messages is ChatMessage[] =>
  Array.isArray(messages) &&
  messages.length > 0 &&
  messages.length <= MAX_HISTORY &&
  messages.every(m =>
    (m?.role === "user" || m?.role === "assistant") &&
    typeof m.text === "string" &&
    m.text.trim().length > 0 &&
    m.text.length <= (m.role === "user" ? MAX_MESSAGE_LENGTH : MAX_REPLY_LENGTH)
  ) &&
  messages[messages.length - 1].role === "user";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: "Assistant is not configured" }, 503);
  }

  let messages: unknown;
  try {
    ({ messages } = await req.json());
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  if (!isValidHistory(messages)) {
    return json({ error: `Send 1-${MAX_HISTORY} messages of up to ${MAX_MESSAGE_LENGTH} characters, ending with a user message` }, 400);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      contents: messages.map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      })),
      config: {
        systemInstruction: context,
        maxOutputTokens: 500,
      },
    });
    return json({ text: response.text ?? "" });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return json({ error: "Upstream error" }, 502);
  }
};

export const config = { path: "/api/ask" };
