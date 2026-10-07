import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const additionalHosts = process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // In sandbox preview mode, allow the proxy's host so Vite doesn't 403 the iframe
    ...(previewMode
      ? { allowedHosts: additionalHosts ? [additionalHosts] : true }
      : {}),
  },
})
