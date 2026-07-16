import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // expose the dev server on the local network
    host: true,
    // allow tunnelling the dev server through ngrok. The leading dot matches any
    // subdomain, so a new ngrok URL each session works without editing this.
    allowedHosts: ['.ngrok-free.app', '.ngrok.io', '.ngrok.app'],
  },
})
