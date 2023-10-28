import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://DragonRomeo.github.io/rss-react-components/',
  plugins: [react()],
});
