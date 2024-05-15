import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/'
  },
});
