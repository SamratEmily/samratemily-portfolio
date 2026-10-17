import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS, PersonalProjects, ACHIEVEMENTS, PROBLEM_SOLVING } from "../../constants";

const MAX_PROMPT_LENGTH = 1000;

const context = `
You are an AI career assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.
Here is his background:
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.duration})`).join('. ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('. ')}
Professional Projects: ${PROJECTS.map(p => `${p.title} - ${p.description}`).join(' ')}
Personal Projects: ${PersonalProjects.map(p => `${p.title} - ${p.description}`).join(' ')}
Problem Solving: ${PROBLEM_SOLVING.problemsSolved} ${PROBLEM_SOLVING.contests}
Achievements: ${ACHIEVEMENTS.map(a => `${a.rank} in ${a.contest}`).join(', ')}.
Education: B.Sc in CSE from Comilla University (CGPA 3.71).

Your goal is to answer questions from recruiters or potential collaborators professionally as if you represent Samrat's team. Keep answers concise, helpful, and technically accurate based on the provided data. Politely decline questions unrelated to Samrat's professional background.
`;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default async (req: Request) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: "Assistant is not configured" }, 503);
  }

  let prompt: unknown;
  try {
    ({ prompt } = await req.json());
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  if (typeof prompt !== "string" || !prompt.trim() || prompt.length > MAX_PROMPT_LENGTH) {
    return json({ error: `Prompt must be 1-${MAX_PROMPT_LENGTH} characters` }, 400);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      contents: prompt,
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
