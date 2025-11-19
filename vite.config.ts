import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

// Plugin to run image optimization before build
const imageOptimizationPlugin = () => ({
  name: 'optimize-images',
  async buildStart() {
    console.log('Running image optimization...');
    try {
      await execPromise('node scripts/optimize-images.js');
      console.log('Image optimization completed');
    } catch (error) {
      console.error('Image optimization failed:', error);
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "production" && imageOptimizationPlugin(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
