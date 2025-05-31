import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/COMP229/', // Match repo name
  plugins: [react()],
});
