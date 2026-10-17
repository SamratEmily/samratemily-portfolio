# MD. Samrat Hossen - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring an AI assistant powered by Google Gemini API.

## Features

- **Responsive Design**: Optimized for all devices
- **PDF Resume Download**: Direct download of resume PDF
- **AI Assistant**: Interactive chat powered by Google Gemini API
- **Modern UI**: Glass morphism design with smooth animations
- **Cover Photo Support**: Professional profile image display
- **Live Project Link**: Direct link to deployed portfolio

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
The AI assistant calls Gemini from a Netlify Function (`netlify/functions/ask.ts`), so the API key never reaches the browser. Never put it in a `VITE_*` variable or commit it.

- **Production:** in Netlify → Site configuration → Environment variables, set `GEMINI_API_KEY` (and optionally `GEMINI_MODEL`, default `gemini-2.5-flash`).
- **Local:** create `.env` (git-ignored) with `GEMINI_API_KEY=your-key`, then run `npx netlify dev` instead of `npm run dev` so `/api/ask` is served.

### 3. Add Your Cover Photo
- Place your cover photo in `public/assets/` directory
- Name it `cover-photo.jpg` (or update the path in `constants.tsx`)
- Recommended size: 400x400 pixels

### 4. Update Live Project URL
In `constants.tsx`, update the `liveProjectUrl` field:
```typescript
liveProjectUrl: "https://samratemily.netlify.app/"
```

### 5. Resume PDF
Your resume PDF is located at `public/assets/Samrat_Hossen.pdf` and will be downloadable via the "Download Resume" button.

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Features Implemented

✅ **PDF Resume Download**: Connected to actual PDF file  
✅ **Gemini AI Integration**: Working AI assistant with your API key  
✅ **Cover Photo Support**: Ready for your profile image  
✅ **Live Project Link**: Button ready for your deployed URL  
✅ **Responsive Design**: Works on all devices  
✅ **Modern UI**: Professional portfolio design  

## Next Steps

1. Add your cover photo to `public/assets/cover-photo.jpg`
2. Update the live project URL in `constants.tsx`
3. Deploy to your preferred hosting platform
4. Test the AI assistant functionality

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Google Gemini AI API

---