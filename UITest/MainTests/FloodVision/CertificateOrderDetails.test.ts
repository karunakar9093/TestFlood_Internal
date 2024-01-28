import { Page, expect, test } from "@playwright/test";
import homePage from "../../PagesObjects/FloodVision/HomePage"
import certificatePage from "../../PagesObjects/FloodVision/CertificateOrderPage"
import  prodTestData  from "../../TestData/prod/FloodVision.json" assert { type: 'json' };
import  uatTestData  from "../../TestData/uat/FloodVision.json" assert { type: 'json' };

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
    const home = new homePage(page);
    await page.goto(`${testData.baseURL}`)
    await home.loginToTotalFlood(testData.userName, testData.password);       
    console.log(await page.url())
    await page.waitForLoadState('networkidle')
});

test("1. FloodVision-  Verify Disputes Queue tab and validate on Disputes Queue page on FloodVision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkDisputesQueue();
    await certificate.VerifyDisputeQueueHeaderisDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("2. FloodVision - Verify Duplicates Queue tab and validate on Duplicates Queue page on FloodVision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkDuplicatesQueue();
    await certificate.VerifyDuplicatesQueueHeaderisDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("3. FloodVision  - Verify Cancel Queue tab and validate Cancel Queue page on FloodVision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkCancelQueue();
    await certificate.VerifyCancelQueueHeaderisDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("4. FloodVision - Verify Maintenance tab and validate on Maintenance page on FloodVision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkMaintenancetab();
    await certificate.VerifyMaintenanceDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("5. FloodVision - Verify Preference tab and validate on Preference page on FloodVision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkPreferencetab();
    await certificate.VerifyPreferenceDisplayed();
    console.log('STATUS: ' + testInfo.status);
})

test("6. FloodVision - Generate Certificate on Flood Vision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkCertificateHeaderLoc();
    await certificate.clkCertificateNew();
    await certificate.orderFormFill(testData.p2ClientId, testData.lastName, testData.firstName, testData.Address, testData.City, testData.Zip, testData.State);
    await certificate.clkSubmitBtn();
    await certificate.verifyCertificateGenerated(testData.p2ClientId)
    console.log('STATUS: ' + testInfo.status);
})

test("7. FloodVision - Create and Search Certificate number on Flood Vision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkCertificateHeaderLoc();
    await certificate.clkCertificateNew();
    await certificate.orderFormFill(testData.p2ClientId, testData.lastName, testData.firstName, testData.Address, testData.City, testData.Zip, testData.State);
    await certificate.clkSubmitBtn();
    await certificate.verifyCertificateGenerated(testData.p2ClientId)
    await certificate.SearchverifyCertificateGenerated(testData.p2ClientId)
    console.log('STATUS: ' + testInfo.status);
})

test("8. FloodVision - Edit Client on Flood Vision", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const certificate = new certificatePage(page);
    await home.clickFloodVision();
    await certificate.clkClientTab();
    await certificate.clkClientSearch();
    await certificate.editClientForm(testData.p2ClientId);
    console.log('STATUS: ' + testInfo.status);
})
test.afterEach(async () => {
    page.close();
});
});