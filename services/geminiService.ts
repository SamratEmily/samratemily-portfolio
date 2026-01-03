
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS, ACHIEVEMENTS, PROBLEM_SOLVING } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "REMOVED_API_KEY";

const context = `
You are an AI career assistant for MD. Samrat Hossen, a Software Engineer.
Here is his background:
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.duration})`).join('. ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('. ')}
Projects: ${PROJECTS.map(p => p.title).join(', ')}
Problem Solving: ${PROBLEM_SOLVING.problemsSolved}. Rank: ${ACHIEVEMENTS[0].rank} in ${ACHIEVEMENTS[0].contest}.
Education: B.Sc in CSE from Comilla University (CGPA 3.71).

Your goal is to answer questions from recruiters or potential collaborators professionally as if you represent Samrat's team. Keep answers concise, helpful, and technically accurate based on the provided data.
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    if (!apiKey) {
      return "The AI assistant is currently unavailable. Please contact me directly via email at " + PERSONAL_INFO.email + "!";
    }

    const ai = new GoogleGenAI(apiKey);
    const model = ai.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: context
    });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently resting. Please contact me directly via email at " + PERSONAL_INFO.email + "!";
  }
}
