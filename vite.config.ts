import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    assetsInclude: ['**/*.pdf'],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split React and related libraries
            'react-vendor': ['react', 'react-dom'],
            // Split Formspree
            'formspree': ['@formspree/react'],
            // Split Google Gemini SDK
            'gemini-sdk': ['@google/genai'],
          },
        },
      },
      chunkSizeWarningLimit: 600, // Increase warning limit to 600KB
    },
  };
});
