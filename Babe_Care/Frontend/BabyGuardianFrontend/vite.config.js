import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4200,
    allowedHosts: 'all'  // 👈 autorise tous les domaines (utile pour ngrok)
  }
});
