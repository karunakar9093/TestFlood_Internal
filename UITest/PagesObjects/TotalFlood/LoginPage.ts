import { Page } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page) { }

    ipt_userName = this.page.locator("//input[@name = 'username']")
    ipt_password = this.page.locator("//input[@name = 'password']")
    btn_submit = this.page.locator("//input[@type= 'submit']")


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
}