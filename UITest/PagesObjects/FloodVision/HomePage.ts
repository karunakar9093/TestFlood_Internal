import { Page } from "@playwright/test";
export default class HomePage {

    constructor(public page: Page) { }

    ipt_userName = this.page.locator("//input[contains(@id, '_UserName')]")
    ipt_password = this.page.locator("//input[contains(@id, '_Password')]")
    btn_submit = this.page.locator("//input[@value = 'Log in']")
    lnk_floodVisionLoc = this.page.locator("//a[@aria-label='Flood Vision']")
    lnk_certificate = this.page.locator("//a[text() = 'Certificate']")
    lnk_NewCertificateNew = this.page.locator("//a[text() = 'New']") 

    

    async loginToTotalFlood(userName: string, password: string) {
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async enterUserName(userName: string) {
        await this.ipt_userName.fill(userName)
    }
    async enterPassword(password: string) {
        await this.ipt_password.fill(password)
    }
    async clickLoginBtn() {
        await this.btn_submit.click()
    }

    async clickFloodVision() {
        await this.lnk_floodVisionLoc.click()
    }
}