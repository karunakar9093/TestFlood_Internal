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
test("1. TotalFlood - Total Flood Order Create for Basic", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const order = new orderPage(page);
    await order.chkBasicRadioBtnChecked();
    await order.clickOnNextStepBtn();
    await order.orderFormFill(testData.lastName, testData.firstName, testData.email, testData.Address, testData.City, testData.Zip, testData.State, testData.Country, testData.client);
    await order.clickOnNextStepBtn();
    await order.clkOrderNowBtn();
    await order.verifyOrderStatus();
    await order.orderTypeTxt()
    await order.floodStatusTxt()
    console.log('STATUS: ' + testInfo.status);
})
test("2. TotalFlood - Total Flood Order Create for LOL", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const order = new orderPage(page);
    await order.chkLOLRadioBtnChecked();
    await order.clickOnNextStepBtn();
    await order.orderFormFill(testData.lastName, testData.firstName, testData.email, testData.Address, testData.City, testData.Zip, testData.State, testData.Country, testData.client);
    await order.clickOnNextStepBtn();
    await order.clkOrderNowBtn();
    await order.verifyOrderStatus();
    await order.orderTypeTxt()
    await order.floodStatusTxt()
    console.log('STATUS: ' + testInfo.status);
})
test.afterEach(async () => {
    page.close();
});
});
