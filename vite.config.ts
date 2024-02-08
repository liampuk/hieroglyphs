import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    open: '/',
    port: 3000,
  },
  plugins: [
    react(),
    vitePluginSvgr({
      svgrOptions: {
        ref: true
      }
    })
  ]
})
