import { Page, expect, test } from "@playwright/test";
import loginPage from "../../PagesObjects/TotalFlood/LoginPage";
import ReportsPage from "../../PagesObjects/TotalFlood/ReportsPage";
import  prodTestData  from "../../TestData/prod/TotalFlood.json" assert { type: 'json' };
import  uatTestData  from "../../TestData/uat/TotalFlood.json" assert { type: 'json' };

test.describe('suite', () => {
    let testData = uatTestData || prodTestData;
    let page: Page;
    if (process.env.ENV == 'uat') {
        testData = uatTestData;
        console.log(process.env.ENV)
    }
    else if (process.env.ENV == 'prod') {
        testData = prodTestData;
        console.log(process.env.ENV)
    }  
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    const login = new loginPage(page);
    await page.goto(`${testData.baseURL}`)
    await login.loginToTotalFlood(testData.userName, testData.password);
    console.log(await page.url())
    await page.waitForLoadState('networkidle')
});

test("1. TotalFloodReport - Verify Volume Reports", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await report.VerifyVolumeReports();
    const actualMsg = "Volume Report"
    const expectedMsg = await report.txt_volumereports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("2. TotalFloodReport - Verify Flood Status Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyFloodStatusReports();
    const actualMsg = "Flood Status Report"
    const expectedMsg = await report.txt_floodStatusReports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("3. TotalFloodReport - Verify Automation Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyAutomationReports();
    const actualMsg = "Automation Report"
    const expectedMsg = await report.txt_automationReports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("4. TotalFloodReport - Verify Flood Positive Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyFloodPositiveReports();
    const actualMsg = "Flood Positive Report"
    const expectedMsg = await report.txt_floodPositiveReports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("5. TotalFloodReport - Verify Turnaround Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyTurnaroundReports();
    const actualMsg = "Turnaround Report"
    const expectedMsg = await report.txt_turnaroundReports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("6. TotalFloodReport - Verify Activity Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyActivityReports();
    const actualMsg = "Activity Report"
    const expectedMsg = await report.txt_activityReports.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test("7. TotalFloodReport - Verify Life Of Loan Revision Report", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const report = new ReportsPage(page);
    await page.waitForLoadState('networkidle')
    await report.VerifyLifeOfLoanRevisionReports();
    const actualMsg = "Life Of Loan Revision Report"
    const expectedMsg = await report.txt_lifeRevisionReport.textContent()
    expect(actualMsg?.trim()).toBe(expectedMsg?.trim());
    console.log('STATUS: ' + testInfo.status);
})
test.afterEach(async () => {
    page.close();
});
});
