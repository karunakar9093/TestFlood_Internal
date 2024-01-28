// playwright.config.ts
import { devices, PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  //testDir: './UITest/MainTests/FloodVision',
  globalSetup:"./UITest/utils/globalSetup.ts",
  testMatch:["*/*.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo: 1000
  },
  },
  //timeout: 120000, // Timeout in milliseconds (2 minutes)
  
  // reporter: [
  //   ['junit', { outputFile: 'test-results/test-results.xml' }]
  // ],
  workers: 40,
  timeout: 60 * 1000 * 5,
  reporter: [["dot"], ['junit', { outputFile: 'results.xml' }], ["html", {
    open: "never"
}]]
};


export default config
