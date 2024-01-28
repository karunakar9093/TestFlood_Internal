import { Page, expect } from "@playwright/test";

export default class OrderPage {

    constructor(public page: Page) { }

    btn_nextStep = this.page.locator("//input[@name='prodList' or @name = 'BTTN']")
    radio_basicbtn = this.page.locator("//input[@name = 'FloodType' and @value = 'Basic']")
    radio_LoLbtn = this.page.locator("//input[@name = 'FloodType' and @value = 'LOL']")
    sel_clientId = this.page.locator("//select[@name = 'clientId']")
    ipt_productEmailId = this.page.locator("//input[@name = 'productEmailId']")
    ipt_borr1ln = this.page.locator("//input[@name = 'borr1ln']")
    ipt_borr1fn = this.page.locator("//input[@name = 'borr1fn']")
    ipt_propAddr1 = this.page.locator("//input[@name = 'propAddr1']")
    ipt_propCity = this.page.locator("//input[@name = 'propCity']")
    ipt_propZip = this.page.locator("//input[@name = 'propZip']")
    sel_stateCd = this.page.locator("//select[@name = 'stateCd']")
    ipt_propCntyDesc = this.page.locator("//input[@name = 'propCntyDesc']")
    btn_orderNow = this.page.locator("//input[@value = 'Order Now']")
    btn_refresh = this.page.locator("//input[@value = 'Refresh']")
    txt_orderStatus = this.page.locator("(//tr[@class = 'repdetail']//td[@onclick])[1]")
    txt_orderType = this.page.locator("(//tr[@class = 'repdetail']//td[@onclick])[6]")
    txt_floodStatus = this.page.locator("(//tr[@class = 'repdetail']//td[@onclick])[5]")
    txt_certNoSearch = this.page.locator("(//td[@class = 'repdetail'])[9]")    
    clk_Search = this.page.locator("//span[@id= 'Search']")
    sel_advancedSearch = this.page.locator("//a[text() = 'Advanced Flood Search']")
    ipt_certNo = this.page.locator("//input[@name = 'certNo']")
    btn_SubmitSearch= this.page.locator("//input[@name = 'SubmitSearch1']")
    txt_referenceNo = this.page.locator("(//tr[@class = 'repdetail']//td[@onclick])//a")
    ipt_reqNo = this.page.locator("//input[@name = 'reqId']")
    txt_refNoSearch = this.page.locator("(//td[@class = 'repdetail'])//a")    
    ipt_LoanNo = this.page.locator("//input[@name = 'loanNo']")
    txt_LoanNoSearch = this.page.locator("(//td[@class = 'repdetail'])[4]")    



    async clickOnNextStepBtn() {
        await this.btn_nextStep.click();
    }

    async chkBasicRadioBtnChecked() {
        await this.radio_basicbtn.setChecked(true);
    }
    async chkLOLRadioBtnChecked() {
        await this.radio_LoLbtn.setChecked(true);
    }
    async orderFormFill(lName: string, fName: string, email: string, address:
        string, city: string, zip: string, state: string, country: string, client: string) {
        await this.ipt_borr1ln.fill(lName)
        await this.sel_clientId.selectOption(client)
        if (!(process.env.ENV == 'uat')) {
        await this.ipt_productEmailId.waitFor({ state: "visible" })
        await this.ipt_productEmailId.fill(email)
        }
        var timestamp = Number(new Date()); // current time as number
        const txt = "_" + timestamp
        await this.ipt_borr1fn.fill(txt)
        await this.ipt_propAddr1.fill(address)
        await this.ipt_propCity.fill(city)
        await this.ipt_propZip.fill(zip)
        await this.sel_stateCd.selectOption(state)
        await this.ipt_propCntyDesc.fill(country)
    }

    async clkOrderNowBtn() {
        await this.page.waitForLoadState('networkidle')
        await this.btn_orderNow.waitFor({state:"visible"})
        await this.btn_orderNow.click()
        await this.page.waitForLoadState('networkidle')

    }
    async verifyOrderStatus() {
        await this.btn_refresh.click()
        await this.page.waitForLoadState('networkidle')
        const OrderStatus = await this.txt_orderStatus.textContent()
        console.log("Order status - " + OrderStatus)
        //expect(orderType).toEqual(expect.any(""));

    }
    async orderTypeTxt() {
        const orderType = await this.txt_orderType.textContent()
        console.log("Order status - " + orderType)
        //expect(orderType).toEqual(expect.any(""));

    }
    async floodStatusTxt() {
        const floodStatus = await this.txt_floodStatus.textContent()
        console.log("Order status - " + floodStatus)
        //expect(floodStatus).toEqual(expect.any(""));
    }
    async advcancedSearchForCertificateNO() {
        const actualCertNo = await this.txt_floodStatus.textContent()
        await this.clk_Search.click()
        await this.sel_advancedSearch.click()
        await this.ipt_certNo.fill(String(actualCertNo?.trim()))
        await this.btn_SubmitSearch.click()
        const expectedCertNo = await this.txt_certNoSearch.textContent()
        expect(actualCertNo?.trim()).toBe(expectedCertNo?.trim());
    }

    async advcancedSearchForReferenceNO() {
        const actualRefNo = await this.txt_referenceNo.textContent()
        await this.clk_Search.click()
        await this.sel_advancedSearch.click()
        await this.ipt_reqNo.fill(String(actualRefNo?.trim()))
        await this.btn_SubmitSearch.click()
        const expectedRefNo = await this.txt_refNoSearch.textContent()
        expect(actualRefNo?.trim()).toBe(expectedRefNo?.trim());
    }
    async advcancedSearchForLoanNO(LoanNo: string) {
        const actualLoanNo = await LoanNo
        await this.clk_Search.click()
        await this.sel_advancedSearch.click()
        await this.ipt_LoanNo.fill(String(actualLoanNo?.trim()))
        await this.btn_SubmitSearch.click()
        const expectedLoanNo = await this.txt_LoanNoSearch.textContent()
        expect(actualLoanNo?.trim()).toBe(expectedLoanNo?.trim());
    }

}