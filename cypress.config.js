const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  // reporter: 'cypress-mochawesome-reporter', alter reporter
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); 
    },
    experimentalStudio: true,
  },
});
