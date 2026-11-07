import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { baguette } from "./src/lib/bread.ts";

if (baguette) {}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
