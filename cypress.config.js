const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pgbg7m',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
