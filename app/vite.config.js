import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use a relative base path so built assets resolve correctly when the
// app is served from a subdirectory or opened from the filesystem.
export default defineConfig({
  base: './',
  plugins: [react()],
})
