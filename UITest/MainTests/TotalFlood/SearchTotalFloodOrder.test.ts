import { Page, expect, test } from "@playwright/test";
import loginPage from "../../PagesObjects/TotalFlood/LoginPage"
import orderPage from "../../PagesObjects/TotalFlood/OrderPage";
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
test("1. TotalFloodSearch - Place Order and Search with Certificate NO", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const order = new orderPage(page);
    await order.chkBasicRadioBtnChecked();
    await order.clickOnNextStepBtn();
    await order.orderFormFill(testData.lastName, testData.firstName, testData.email, testData.Address, testData.City, testData.Zip, testData.State, testData.Country, testData.client);
    await order.clickOnNextStepBtn();
    await order.clkOrderNowBtn();
    await order.verifyOrderStatus();
    await order.orderTypeTxt();
    await order.floodStatusTxt();
    await order.advcancedSearchForCertificateNO();
    console.log('STATUS: ' + testInfo.status);
})
test("2. TotalFloodSearch - Place Order and Search with Reference NO", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const order = new orderPage(page);
    await order.chkBasicRadioBtnChecked();
    await order.clickOnNextStepBtn();
    await order.orderFormFill(testData.lastName, testData.firstName, testData.email, testData.Address, testData.City, testData.Zip, testData.State, testData.Country, testData.client);
    await order.clickOnNextStepBtn();
    await order.clkOrderNowBtn();
    await order.verifyOrderStatus();
    await order.orderTypeTxt();
    await order.floodStatusTxt();
    await order.advcancedSearchForReferenceNO();
    console.log('STATUS: ' + testInfo.status);
})
test("3. TotalFloodSearch - Place Order and Search with Loan NO", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const order = new orderPage(page);
    await order.chkBasicRadioBtnChecked();
    await order.clickOnNextStepBtn();
    await order.orderFormFill(testData.lastName, testData.firstName, testData.email, testData.Address, testData.City, testData.Zip, testData.State, testData.Country, testData.client);
    await order.clickOnNextStepBtn();
    await order.clkOrderNowBtn();
    await order.verifyOrderStatus();
    await order.orderTypeTxt();
    await order.floodStatusTxt();
    await order.advcancedSearchForLoanNO(testData.LoanNo);
    console.log('STATUS: ' + testInfo.status);
})
test.afterEach(async () => {
    page.close();
});
});