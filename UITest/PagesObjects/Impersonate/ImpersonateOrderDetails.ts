import { Page, expect } from "@playwright/test";
export default class ImpersonateOrderDetails {

    constructor(public page: Page) { }

    lnk_systemMenu = this.page.locator("//a[@aria-label = 'System Menu']")
    lnk_systemMenuMain = this.page.locator("//div[contains(@id, '_IAS')]//a")
    tab_Impersonate = this.page.locator("//a[text() = 'Impersonate']")
    ipt_lenderId = this.page.locator("//input[@placeholder = 'Lender ID']")
    ipt_floodLOB = this.page.locator("//input[@id = 'ctl00_cpBody_txtBranch']")
    btn_continue = this.page.locator("//input[@value= 'Continue']")
    lnk_Reports = this.page.locator("//*[@id='UIRefreshBlockMain_IFL']//a[@aria-label='Reports']")
    lnk_CustomerServiceRequestLoc = this.page.locator("//*[@id='UIRefreshBlockMain_IFL']//a[@aria-label='Customer Service Request']")
    
    async clickSystemMenu() {
        await this.lnk_systemMenu.waitFor({ state: "visible" })
        await this.lnk_systemMenu.click()
    }
    async clickSystemMenuMain() {
        await this.lnk_systemMenuMain.waitFor({ state: "visible" })
        await this.lnk_systemMenuMain.click()
    }
    async clickImpersonate() {
        await this.tab_Impersonate.waitFor({ state: "visible" })
        await this.tab_Impersonate.click()
    }
    async enterImpersonateDetails(lenderID: string, floodLOB: string) {
        await this.ipt_lenderId.waitFor({ state: "visible" })       
        await this.ipt_floodLOB.waitFor({ state: "visible" })
        await this.ipt_floodLOB.fill(floodLOB)
        await this.ipt_lenderId.fill(lenderID)
        await this.btn_continue.click()
        await this.btn_continue.waitFor({ state: "visible" })
        await this.btn_continue.click()

    }
    async clickCustomerServiceRequestLoc() {
        await this.lnk_Reports.hover()
        await this.lnk_CustomerServiceRequestLoc.waitFor({ state: "visible" })
        await this.lnk_CustomerServiceRequestLoc.click()
    }
}