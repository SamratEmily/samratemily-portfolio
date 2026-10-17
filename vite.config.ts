import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
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
          },
        },
      },
      chunkSizeWarningLimit: 600, // Increase warning limit to 600KB
    },
  };
});
