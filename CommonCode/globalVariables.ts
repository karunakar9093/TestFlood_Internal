import { test as baseTest, Page } from '@playwright/test';
import { Environment, getEnvironmentByName } from './EnvironmentData';
import { chromium, Browser, BrowserContext } from 'playwright'; // Import additional required types
import * as playwright from 'playwright';

export interface GlobalVariables {
  firstVariable: string;
  secondVariable: string;
  Environment: Environment;
  gPage: Page; // Page object from Playwright
}

let environmentNow: string = process.env.EnvironmentNow as string;

export const test = baseTest.extend<{ globals: GlobalVariables }>({
  globals: async ({}, use) => {
    
    // #region SPECIAL FOR DEBUG ONLY
    // When debugging set environment manually such as:
    //  environmentNow = "UAT-CHROME-REPORTS-LOCAL";
    //environmentNow = "UAT-CHROME-REPORTS-LOCAL-ADMIN";
    //environmentNow = "QA-CHROME-REPORTS-LOCAL";
    // otherwise rem out the above line
    // #endregion SPECIAL FOR DEBUG ONLY

    const EnvironmentNow: Environment = await getEnvironmentByName(environmentNow);
    console.log("Environment chosen: " + EnvironmentNow.Name);

    // Launch the browser, context, and page outside the object literal
    // Show browser:.
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let capabilities: any;
    if (EnvironmentNow.Name.toUpperCase().includes("REMOTE")) {
    
        //---
        let LT_USERNAME: string = process.env.LT_USERNAME ?? "Missing LT_USERNAME";
        let LT_ACCESS_KEY: string = process.env.LT_ACCESS_KEY ?? "Missing LT_ACCESS_KEY";
        
        console.log("Values used to reach LambdaTest:");
        console.log("  LT_USERNAME=" + LT_USERNAME);
        console.log("  LT_ACCESS_KEY=" + LT_ACCESS_KEY);
        
        (async () => {
          capabilities = {
            'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
            'browserVersion': 'latest',
            'LT:Options': {
              'platform': 'Windows 10',
              'build': 'Playwright Sample Build',
              'name': 'Playwright Sample Test',
              'user': LT_USERNAME,
              'accessKey': LT_ACCESS_KEY,
              'network': true,
              'video': true,
              'console': true
            }
          }

        })()

          browser = await chromium.connect({
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
          })

  } else { // local run:
    browser = await playwright.chromium.launch({ headless: true });
  }

  context = await browser.newContext();
  page = await context.newPage();

    // Now create the globalVars object with all properties including the page
    let globalVars: GlobalVariables = {
      firstVariable: 'firstVariable open to use',
      secondVariable: 'secondVariable open to use',
      Environment: EnvironmentNow,
      gPage: page // Assign the page object to gPage
    };

    // Use the global variables within the test context
    await use(globalVars);

    // Clean up after the test is done
    await page.close();
    await context.close();
    await browser.close();
  }
});

export const expect = baseTest.expect;
