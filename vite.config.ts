import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://DragonRomeo.github.io/react-components/',
  plugins: [react()],
});
