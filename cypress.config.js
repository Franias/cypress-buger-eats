import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';

export default defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/',
    setupNodeEvents(on, config) {
      allureCypress(on);
      },
  },
});
