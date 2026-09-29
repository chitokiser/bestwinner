import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
