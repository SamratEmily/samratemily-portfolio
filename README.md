# MD. Samrat Hossen - Portfolio

A responsive portfolio website built with React, TypeScript, Tailwind CSS and Vite, featuring an AI career assistant powered by the Google Gemini API.

Live: https://samratemily.netlify.app/

## Features

- **Responsive design** for phones, tablets and desktops
- **Resume and certificate downloads**
- **AI career assistant** that answers questions about my experience, served through a Netlify Function so the API key stays server-side
- **Contact form** via Formspree

## Project Structure

```
App.tsx                    Page layout and sections
components/                Navbar, ContactForm, ProjectCard, AiAssistant, ...
constants.ts               All portfolio content (experience, projects, skills, education)
types.ts                   Shared TypeScript types
services/geminiService.ts  Browser client for the assistant endpoint
netlify/functions/ask.ts   Serverless function that calls Gemini (POST /api/ask)
public/assets/             Resume, certificate and profile photo
```

To update content, edit `constants.ts`. The page and the AI assistant both read from it.

## Setup

```bash
npm install
```

### Environment variables

The Gemini API key is only read by the Netlify Function. Never put it in a `VITE_*` variable or commit it.

| Variable | Where | Required |
| --- | --- | --- |
| `GEMINI_API_KEY` | Netlify → Site configuration → Environment variables | Yes |
| `GEMINI_MODEL` | Same place; defaults to `gemini-2.5-flash` | No |

For local development, put them in a `.env` file (git-ignored).

## Development

```bash
npx netlify dev   # site + /api/ask function (needs GEMINI_API_KEY in .env)
npm run dev       # site only; the assistant shows its fallback message
```

## Scripts

```bash
npm run typecheck  # strict TypeScript check
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

## Deployment

Netlify reads `netlify.toml`: it builds with `npm run build`, publishes `dist/`, and deploys the functions in `netlify/functions/`.

## Tech Stack

- React 19, TypeScript
- Tailwind CSS 3 (compiled at build time)
- Vite
- Netlify Functions + Google Gemini API (`@google/genai`)
- Formspree
