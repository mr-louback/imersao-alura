import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteEnv from 'vite-plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteEnv({
    include:['REACT_APP_*']
  })],
})
