import { Page, expect } from "@playwright/test";
export default class GeoOrderCertificate {

    constructor(public page: Page) { }

    lnk_OrderCertificatesLoc = this.page.locator("//a[@aria-label='Order Certificates']")
    ipt_LoanId = this.page.locator("//input[@id='ctl00_cpBody_txtLoanID']")
    ipt_BorrowerLastNameLoc = this.page.locator("//*[@id='ctl00_cpBody_txtBorrowerLastName']")
    ipt_HouseNoLoc = this.page.locator("//*[@name='ctl00$cpBody$txtHouseNo']")
    ipt_StreetLoc = this.page.locator("//*[@name='ctl00$cpBody$txtStreet']")
    ipt_Zicode1Loc = this.page.locator("//*[@name='ctl00$cpBody$txtZIP5']")
    ipt_Zicode2Loc = this.page.locator("//*[@name='ctl00$cpBody$txtZIP5']//following-sibling::input")
    ipt_CityLoc = this.page.locator("//*[@name='ctl00$cpBody$txtCity']")
    btn_SubmitLoc = this.page.locator("//*[@name='ctl00$cpBody$btnSubmit']")
    txt_PreviousPageButtonLoc = this.page.locator("//a[contains(text(),'Previous Page')]")
    txt_FloodCertificateHeaderLoc = this.page.locator("//*[@id='ctl00_PageContent_lblHeader']")
    txt_pdfContent = this.page.locator("//div[@id = 'pdfContent']")
    lnk_ViewOrPrintCertificatesLoc = this.page.locator("//a[@aria-label='View/Print Certificates']")
    chk_Loan_Number = this.page.locator("(//input[@value = 'Loan_Number']//parent::td//label)[1]")
    chk_Additional_Loan_ID = this.page.locator("(//input[@value = 'Additional_Loan_ID']//parent::td//label)[1]")
    chk_Cert_No = this.page.locator("(//input[@value = 'Cert_No']//parent::td//label)[1]")
    chk_Zip = this.page.locator("(//input[@value = 'Zip']//parent::td//label)[1]")
    ipt_searchBox = this.page.locator("//*[@name='ctl00$cpBody$search']")
    txt_ViewPrintCertPageTitleLoc = this.page.locator("//*[@id='ctl00_cpBody_lHeader']")
    btn_submit = this.page.locator("//*[@id='ctl00_cpBody_submit1']")
    ipt_searchBoxZip = this.page.locator("//*[@name='ctl00$cpBody$txtZIP']")
    ipt_searchBoxStreet = this.page.locator("//*[@name='ctl00$cpBody$txtStreet']")
    chk_rbAllPendingOrders = this.page.locator("//input[@value = 'rbAllPendingOrders']//parent::span//label")
    chk_rbLast5 = this.page.locator("//input[@value = 'rbLast5']//parent::span//label")
    chk_rbLast10 = this.page.locator("//input[@value = 'rbLast10']//parent::span//label")
    chk_rbLast30 = this.page.locator("//input[@value = 'rbLast30']//parent::span//label")
    btn_submitSearch = this.page.locator("//*[@id='ctl00_cpBody_Button1']")
    lnk_CustomerServiceRequestLoc = this.page.locator("//*[@id='UIRefreshBlockMain_IFL']//a[@aria-label='Customer Service Request']")
    ipt_CSRNameLoc = this.page.locator("//div/input[contains(@id,'tbName')]")
    ipt_CSRPhoneNumberLoc = this.page.locator("//div/input[contains(@id,'tbPhoneNumber')]")
    ipt_CSREmailAddressLoc = this.page.locator("//div/input[contains(@id,'tbEmailAddress')]")
    ipt_CSRCertNoLoc = this.page.locator("//div/input[contains(@id,'tbCertNo')]")
    ipt_CSRCompanyLoc = this.page.locator("//div/input[contains(@id,'tbCompany')]")
    ipt_CSRFaxNumberLoc = this.page.locator("//div/input[contains(@id,'tbFaxNumber')]")
    drpDown_CSTypeOfRequest = this.page.locator("//div/select[contains(@id,'ddTypeOfRequest')]")
    txt_CSRCommentsLoc = this.page.locator("//div/textarea[contains(@id,'tbComments')]")
    btn_CSRSubmit = this.page.locator("//div/input[contains(@id,'CustomerRequest')]")
    msg_CSRSuccessThankYou = this.page.locator("//b[text() = 'Thank You']")
    msg_CustomerServiceSuccessMessage = this.page.locator("//div[contains(@id,'pnlLAConfirmation')]/span[text()='Customer Service was notified of your request.']")
    lnk_Reports = this.page.locator("//*[@id='UIRefreshBlockMain_IFL']//a[@aria-label='Reports']")
    lnk_ReportHeaderLoc= this.page.locator("//*[@class='UIRefreshMainContentAreaHead']/h2")
    ipt_ReportNameLoc= this.page.locator("//*[@name='ctl00$cpBody$ddlReportName']")
    ipt_ReportServiceTypeLoc= this.page.locator("//*[@name='ctl00$cpBody$ddlServiceType']")
    ipt_ReportCustomerLenderLoc= this.page.locator("//*[@name='ctl00$cpBody$lbLender']/option")
    ipt_ReportOrderDateFromLoc= this.page.locator("//*[@name='ctl00$cpBody$txtOrderDateFrom']")
    ipt_ReportPerviousDate= this.page.locator("(//th[@class = 'prev']//*[@class = 'iconify'])[1]")
    ipt_ReportSelectDate= this.page.locator("(//td[@class = 'day' and text() = '11'])[1]")
    ipt_ReportCurrentDate= this.page.locator("(//td[@class = 'day active'])[last()]")

    ipt_ReportOrderDateToLoc= this.page.locator("//*[@name='ctl00$cpBody$txtOrderDateTo']")      
    btn_ReportBtnLoc= this.page.locator("//*[@name='ctl00$cpBody$btnReport']")        
    header_ReporResultHeaderLoc= this.page.locator("//*[contains(@id,'VisibleReportContentReportViewer')]//table//td//div/span[contains(text(),'Report')]")        
    lnk_Transfer_Cancellations= this.page.locator("//ul[@class = 'UIRefreshHiddenList']//a[text()='Transfer/Cancellations']")        
    ipt_txtCertNO= this.page.locator("//input[@Id = 'ctl00_cpBody_txtCertNO']")        
    ipt_txtCertNoSeq= this.page.locator("//input[@Id = 'ctl00_cpBody_txtCertNoSeq']")        
    btn_txtCertNoSeq= this.page.locator("//input[@Id = 'ctl00_cpBody_Transfer']")
    header_Transfer_Cancellations= this.page.locator("//span[text() = 'Cancellations/Service Transfers']")        


    async clickOrderCertificate() {
        await this.lnk_OrderCertificatesLoc.waitFor({ state: "visible" })
        await this.lnk_OrderCertificatesLoc.click()
    }
    async orderFormFill(lName: string, HouseNo: string, street: string, city: string, zip1: string, zip2: string) {
        await this.ipt_BorrowerLastNameLoc.fill(lName)
        var timestamp = Number(new Date()); // current time as number
        const txt = timestamp
        await this.ipt_LoanId.fill(String(timestamp))
        await this.ipt_HouseNoLoc.fill(HouseNo)
        await this.ipt_StreetLoc.fill(street)
        await this.ipt_CityLoc.fill(city)
        await this.ipt_Zicode1Loc.fill(zip1)
        await this.ipt_Zicode2Loc.fill(zip2)
    }

    async clickSubmitbtn() {
        await this.btn_SubmitLoc.click()
    }
    async VerifyPreviousPageDisplayed() {
        await this.txt_PreviousPageButtonLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_PreviousPageButtonLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async VerifyFloodCertificateHeaderDisplayed() {
        await this.txt_FloodCertificateHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_FloodCertificateHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async VerifypdfContentDisplayed() {
        await this.txt_pdfContent.waitFor({ state: "visible" })
        var isVisible = await this.txt_pdfContent.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clickViewOrPrinterCertificate() {
        await this.lnk_ViewOrPrintCertificatesLoc.waitFor({ state: "visible" })
        await this.lnk_ViewOrPrintCertificatesLoc.click()
    }
    async clickCheckBox(txt: string) {
        if (txt == "Loan_Number") {
            await this.chk_Loan_Number.click()
        }
        else if (txt == "Additional_Loan_ID") {
            await this.chk_Additional_Loan_ID.click()
        }
        else if (txt == "Cert_No") {
            await this.chk_Cert_No.click()
        }
        else if (txt == "Zip") {
            await this.chk_Zip.click()
            await this.chk_Zip.click()
        }
    }
    async enterSearchBox(value: string) {
        await this.ipt_searchBox.waitFor({ state: "visible" })
        await this.ipt_searchBox.fill(value)
    }
    async clickSubmitSearchbtn() {
        await this.btn_submit.click()
    }
    async VerifyviewOrPrintCertificateHeaderDisplayed() {
        await this.txt_ViewPrintCertPageTitleLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_ViewPrintCertPageTitleLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async enterSearchBoxZip(zip: string, street: string) {
        await this.ipt_searchBoxZip.waitFor({ state: "visible" })
        await this.ipt_searchBoxZip.fill(zip)
        await this.ipt_searchBoxStreet.fill(street)
    }
    async clickCheckBoxOrders(txt: string) {
        if (txt == "AllPendingOrders") {
            await this.chk_rbAllPendingOrders.click()
        }
        else if (txt == "Last5") {
            await this.chk_rbLast5.click()
        }
        else if (txt == "Last10") {
            await this.chk_rbLast10.click()
        }
        else if (txt == "Last30") {
            await this.chk_rbLast30.click()
        }
    }
    async clickSubmitSearchForOrders() {
        await this.btn_submitSearch.click()
    }
    async clickCustomerServiceRequestLoc() {
        if (process.env.ENV == 'uat') {
            await this.lnk_Reports.hover()
        }
        await this.lnk_CustomerServiceRequestLoc.waitFor({ state: "visible" })
        await this.lnk_CustomerServiceRequestLoc.click()
    }
    async csrFormFill(csrName: string, csrCompany: string, csrPhone: string, csrFax: string, csrEmail: string, csrType: string) {
        var timestamp = Number(new Date()); // current time as number
        const txt = csrName + "_" + timestamp
        await this.ipt_CSRNameLoc.fill(txt)
        await this.ipt_CSRCompanyLoc.fill(csrCompany)
        await this.ipt_CSRPhoneNumberLoc.fill(csrPhone)
        await this.ipt_CSRFaxNumberLoc.fill(csrFax)
        await this.ipt_CSREmailAddressLoc.fill(csrEmail)
        await this.drpDown_CSTypeOfRequest.selectOption(csrType)
        await this.txt_CSRCommentsLoc.fill("Place a CSR")
    }
    async clickCSRSubmit() {
        await this.btn_CSRSubmit.waitFor({ state: "visible" })
        await this.btn_CSRSubmit.click()
    }
    async verifyCSRSuccessMessage() {
        await this.msg_CSRSuccessThankYou.waitFor({ state: "visible" })
        var isVisible = await this.msg_CSRSuccessThankYou.isVisible();
        expect(isVisible).toBeTruthy();
        await this.msg_CustomerServiceSuccessMessage.waitFor({ state: "visible" })
        var isVisible2 = await this.msg_CustomerServiceSuccessMessage.isVisible();
        expect(isVisible2).toBeTruthy();
    }
    async clickReports() {
        await this.lnk_Reports.waitFor({ state: "visible" })
        await this.lnk_Reports.click()
        await this.lnk_ReportHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.lnk_ReportHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clickReportsGenerate(reportName:string,serviceType:string) {
        await this.ipt_ReportNameLoc.waitFor({ state: "visible" })
        await this.ipt_ReportNameLoc.selectOption(reportName)
        await this.ipt_ReportServiceTypeLoc.selectOption(serviceType)
        await this.ipt_ReportCustomerLenderLoc.click()
        //Select From date
        await this.ipt_ReportOrderDateFromLoc.click()
        for (let i = 0; i < 9; i++) {
            await this.ipt_ReportPerviousDate.waitFor({ state: "visible" })
            await this.ipt_ReportPerviousDate.click()
        }
        await this.ipt_ReportSelectDate.click()
        //Select To date
        await this.ipt_ReportOrderDateToLoc.click()
        await this.ipt_ReportCurrentDate.click()
        await this.btn_ReportBtnLoc.click() 
    }
    async clickTransfer_Cancellations() {      
        await this.lnk_Reports.hover()
        await this.lnk_Reports.highlight()        
        await this.lnk_Transfer_Cancellations.scrollIntoViewIfNeeded()
        await this.lnk_Transfer_Cancellations.highlight()
        await this.lnk_Transfer_Cancellations.click()
    }
    async clickTransferCancellationsFill(txtCertNO:string,txtCertNoSeq:string) {
        await this.ipt_txtCertNO.waitFor({ state: "visible" })
        await this.ipt_txtCertNO.fill(txtCertNO)
        await this.ipt_txtCertNoSeq.fill(txtCertNoSeq)
        await this.btn_txtCertNoSeq.click()
        var isVisible = await this.header_Transfer_Cancellations.isVisible();
        expect(isVisible).toBeTruthy();
    }
}