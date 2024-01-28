import { Page, expect, test } from "@playwright/test";
import homePage from "../../PagesObjects/FloodVision/HomePage"
import impersonatePage from "../../PagesObjects/Impersonate/ImpersonateOrderDetails"
import geoLogic from "../../PagesObjects/GeoLogic/GeoOrderCertificate"
import  prodTesttestData  from "../../TestData/prod/Impersonate.json" assert { type: 'json' };
import  uatTesttestData  from "../../TestData/uat/Impersonate.json" assert { type: 'json' };

test.describe('suite', () => {
    let testData = uatTesttestData || prodTesttestData;
    let page: Page;
    if (process.env.ENV == 'uat') {
        testData = uatTesttestData;
    }
    else if (process.env.ENV == 'prod') {
        testData = prodTesttestData;
    } 
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    const home = new homePage(page);
    await page.goto(`${testData.baseURL}`)
    await home.loginToTotalFlood(testData.userName, testData.password);
    console.log(await page.url())
    await page.waitForLoadState('networkidle')
});

test("1. Imp - Verify Submit Automatic Order Certificates for flood services", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const imPage = new impersonatePage(page);
    const geoPage = new geoLogic(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickOrderCertificate();
    await geoPage.orderFormFill(testData.lastName, testData.House, testData.Street, testData.City, testData.Zip1, testData.Zip2);
     await geoPage.clickSubmitbtn();
    await geoPage.VerifyPreviousPageDisplayed();
    await geoPage.VerifyFloodCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("2. Imp - Verify View Or Print Certificates from Flood Services tab for Loan ID", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBox("Loan_Number");
    await geoPage.enterSearchBox(testData.LoanID);
    await geoPage.clickSubmitSearchbtn();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})

test("3. Imp - Verify View Or Print Certificates from Flood Services tab for Certificate Number", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBox("Cert_No");
    await geoPage.enterSearchBox(testData.CertificateNo);
    await geoPage.clickSubmitSearchbtn();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("4. Imp - Verify View Or Print Certificates from Flood Services tab for Zip Coder", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBox("Zip");
    await geoPage.enterSearchBoxZip(testData.Zip1, testData.zipOptional);
    await geoPage.clickSubmitSearchbtn();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("5. Imp - Verify View Or Print Certificates from Flood Services tab for All Pending Orders", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB);
    } 
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBoxOrders("AllPendingOrders");
    await geoPage.clickSubmitSearchForOrders();
    //await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("6. Imp - Verify View Or Print Certificates from Flood Services tab for Last 5 days", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBoxOrders("Last5");
    await geoPage.clickSubmitSearchForOrders();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("7. Imp - Verify View Or Print Certificates from Flood Services tab for Last 10 days", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBoxOrders("Last10");
    await geoPage.clickSubmitSearchForOrders();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("8. Imp - Verify View Or Print Certificates from Flood Services tab for Last 30 days", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickViewOrPrinterCertificate();
    await geoPage.clickCheckBoxOrders("Last30");
    await geoPage.clickSubmitSearchForOrders();
    await geoPage.VerifyviewOrPrintCertificateHeaderDisplayed();
    console.log('STATUS: ' + testInfo.status);
})
test("9. Imp - Submit Email Customer Service Request", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await imPage.clickCustomerServiceRequestLoc();
    await geoPage.csrFormFill(testData.csrName, testData.csrCompany, testData.csrPhone, testData.csrFax, testData.csrEmail, testData.csrType);
    await geoPage.clickCSRSubmit();
    await geoPage.verifyCSRSuccessMessage();
    console.log('STATUS: ' + testInfo.status);
})
test("10. Imp - Verify User click on Flood POSITIVE Reports", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickReports();
    await geoPage.clickReportsGenerate(testData.ReportName,testData.ServiceType);
    console.log('STATUS: ' + testInfo.status);
})
test("11. Imp -Verify User click on Flood Volume Reports", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB);    
    }
    await geoPage.clickReports();
    await geoPage.clickReportsGenerate(testData.ReportName2,testData.ServiceType);
    console.log('STATUS: ' + testInfo.status);
})
test("12. Imp - Verify User Transfer Cancellations ", async ({ }, testInfo) => {
    console.log('TITLE: ' + testInfo.title);
    const home = new homePage(page);
    const geoPage = new geoLogic(page);
    const imPage = new impersonatePage(page);
    if (!(process.env.ENV == 'uat')) {
    await imPage.clickSystemMenu();
    await imPage.clickSystemMenuMain();
    await imPage.clickImpersonate();
    await imPage.enterImpersonateDetails(testData.lenderID,testData.floodLOB); 
    }
    await geoPage.clickTransfer_Cancellations();
    await geoPage.clickTransferCancellationsFill(testData.CertificateNo,testData.txtCertNoSeq);
    console.log('STATUS: ' + testInfo.status);
})
test.afterEach(async () => {
    page.close();
});
});