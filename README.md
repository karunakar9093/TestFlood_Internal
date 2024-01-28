Instructions on how to create and run Playwright tests:

• If this is the first time that you have opened this directory with VSCODE run the following in the 
  👉 Menu 👉 View 👉 Terminal: ./InstallSetUps.ps1

• Browser visibility: 
  For Web UI tests the current setting is headless = true 👉  invisible.  
  If you want to see the the browser for testing your code, change, but do not check in, a change in:    globalVariables.ts Line 70:
    browser = await playwright.chromium.launch({ headless: false });
  Note: Remote has it's own settings.

• Before running any tests run environment choice and remote choices from 👉 Menu 👉 View 👉 Terminal:  
    $env:EnvironmentNow = "UAT-CHROME-REPORTS-LOCAL"      
        or
    $env:EnvironmentNow = "QA-CHROME-REPORTS-LOCAL"
        or
    $env:EnvironmentNow = "UAT-CHROME-REPORTS-REMOTE"
        and
    //Example using my id:
    $env:LT_USERNAME = "SentinelsAutomation"
    $env:LT_ACCESS_KEY = "4j6iQlCQDyC3MMQP6soiPTd2SFnWwk7oKFkZii4Sa3omRsbOwr"

    Alternate to the above 👉 Just copy and paste this block in the terminal window:
      For just local:
        ex: local runs for WEB UI and Web Service API in UAT:
          $env:EnvironmentNow = "UAT-CHROME-REPORTS-LOCAL"
        ex: local runs for WEB UI and Web Service API in QA:
          $env:EnvironmentNow = "QA-CHROME-REPORTS-LOCAL"
      
      For remote:
        $env:EnvironmentNow = "UAT-CHROME-REPORTS-REMOTE"
        $env:LT_USERNAME = "SentinelsAutomation"
        $env:LT_ACCESS_KEY = "4j6iQlCQDyC3MMQP6soiPTd2SFnWwk7oKFkZii4Sa3omRsbOwr"

        ◊ See file CommonCode 👉 Environment.json where the name attribute is used for your 
          environment choice above.

  For debugging:
    • The DEBUG CONSOLE does not see our entry to the environment set above such as 
            $env:EnvironmentNow = "UAT-CHROME-REPORTS-LOCAL" 
      so do the following when debugging:
       ◊  Temporarily edit globalVariables.ts un-rem the line environmentNow = "UAT-CHROME-REPORTS-LOCAL" 
      You can change to another setting but this is the line to un-rem.
      👉 Then you can right-click on any test and select  "Debug Playwright Test" from the context menu.
      The section of globalVariables.ts with this edit is near the top and is as follows:
    
          // #region SPECIAL FOR DEBUG ONLY
          // When debugging set environment manually such as:
          //  environmentNow = "UAT-CHROME-REPORTS-LOCAL"
          // otherwise rem out the above line
          // #endregion SPECIAL FOR DEBUG ONLY



• Example test calls from 👉 Menu 👉 View 👉 Terminal:
    ◊ Run all test files, those with suffix .spec.ts:
        o npx playwright test
    ◊ Run a specific test file only: 
        o npx playwright test -g "TC-1234 - My test case description"
            𝇇 such as: test('TC-1234 - My test case description', async ({ globals }) => {  ...etc.
              ◊ The above syntax, "'TC-1234 - The rest of my test name'", will be matched
                to say the Azure test case object: "TEST CASE 1234".
    ◊ Run a test suite, as defined by a VSCODE Playwright test suite:
        o npx playwright test -g "Name of my Test Suite"
            𝇇 Example of what a TypeScript "Test Suite", using "test.describe", looks like:

								test.describe('Name of my Test Suite', () => {
								  test('Test A', async ({ globals }) => {    
									console.log("This is output from the test 'Test A'");    
								  });

								  test('Test B', async ({ globals }) => {    
									console.log("This is output from the test 'Test B'");
								  });
								});
           
• Demonstration code for TypeScript with Playwright:
      ◊ WEB UI: TestDemo.spec.ts 👉 
        "TC-9999 - Demonstrate WEB UI Test To Tax Amount Reports"
      ◊ WEB SERVICE - API: WebService_Tests.spec.ts 👉 
        "TC-9998 - Demonstrate WEB Service - API - Test To Tax Amount Reports"

• If/when you add a new test file:
      ◊ File should be located in the Test_Files subdirectory
      ◊ File name must end with .spec.ts
        example: MyFileName.spec.ts
      ◊ Other file types are recognized by Playwright but .spec.ts seems most common.

**************
FAQ Section  *
**************

Q:  
A:


*************************
TO DO FROM SUGGESTIONS  *
*************************

• 