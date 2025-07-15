// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
    },
  },
  directConnect: true,
  chromeDriver: require("chromedriver").path,
  baseUrl: "http://localhost:8100/", // antes era 4200
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    // Disable waiting for Angular globally for Ionic apps
    browser.waitForAngularEnabled(false);
  },
};
