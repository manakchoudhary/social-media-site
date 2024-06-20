import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

// Configuration for Vite
export default defineConfig({
  plugins: [reactPlugin()],
});
