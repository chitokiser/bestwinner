import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'netlify-functions-dev-proxy',
      configureServer(server) {
        server.middlewares.use('/.netlify/functions/cj-proxy', async (req, res) => {
          let bodyStr = '';
          req.on('data', chunk => { bodyStr += chunk; });
          req.on('end', async () => {
            try {
              const cjProxy = await import('./netlify/functions/cj-proxy.js');
              const handler = cjProxy.default?.handler || cjProxy.handler;
              const result = await handler({
                httpMethod: req.method,
                headers: req.headers,
                body: bodyStr
              });
              res.statusCode = result.statusCode || 200;
              Object.entries(result.headers || {}).forEach(([k, v]) => res.setHeader(k, v));
              res.end(result.body);
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ code: 500, message: err.message }));
            }
          });
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
          if (id.includes('src/components/BusinessUnits/SolarEnergySection') || id.includes('src/data/solarProjectsData')) {
            return 'business-solar';
          }
          if (id.includes('src/components/BusinessUnits/ElevatorSection') || id.includes('src/components/BusinessUnits/ElevatorCalculator')) {
            return 'business-elevator';
          }
          if (id.includes('src/components/BusinessUnits/SmartParkingSection')) {
            return 'business-parking';
          }
          if (id.includes('src/components/BusinessUnits/WaterproofingSection') || id.includes('src/pages/WaterproofingPage')) {
            return 'business-waterproofing';
          }
        }
      }
    }
  }
})
