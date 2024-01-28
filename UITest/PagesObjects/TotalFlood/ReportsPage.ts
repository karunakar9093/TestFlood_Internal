import { Page } from "@playwright/test";

export default class ReportsPage {

    constructor(public page: Page) { }

    lnk_reports = this.page.locator("//span[@id= 'Reports']")
    lnk_volumereports = this.page.locator("//a[text() = 'Volume Report']")
    lnk_floodStatusReports = this.page.locator("//a[text() = 'Flood Status Report']")
    lnk_automationReports = this.page.locator("//a[text() = 'Automation Report']")
    lnk_floodPositiveReports = this.page.locator("//a[text() = 'Flood Positive Report']")
    lnk_turnaroundReports = this.page.locator("//a[text() = 'Turnaround Report']")
    lnk_activityReports = this.page.locator("//a[text() = 'Activity Report']")
    lnk_lifeRevisionReport = this.page.locator("(//a[text() = 'Life Of Loan Revision Report'])[last()]")
    txt_volumereports = this.page.locator("//h1[text() = 'Volume Report']")
    txt_floodStatusReports = this.page.locator("//h1[text() = 'Flood Status Report']")
    txt_automationReports = this.page.locator("//h1[text() = 'Automation Report']")
    txt_floodPositiveReports = this.page.locator("//h1[text() = 'Flood Positive Report']")
    txt_turnaroundReports = this.page.locator("//h1[text() = 'Turnaround Report']")
    txt_activityReports = this.page.locator("//h1[text() = 'Activity Report']")
    txt_lifeRevisionReport = this.page.locator("//h1[text() = 'Life Of Loan Revision Report']")



    async VerifyVolumeReports() {
        await this.lnk_reports.click()
        await this.lnk_volumereports.click()
    }

    async VerifyFloodStatusReports() {
        await this.lnk_reports.click()
        await this.lnk_floodStatusReports.click()
    }
    async VerifyAutomationReports() {
        await this.lnk_reports.click()
        await this.lnk_automationReports.click()
    }
    async VerifyFloodPositiveReports() {
        await this.lnk_reports.click()
        await this.lnk_floodPositiveReports.click()
    }
    async VerifyTurnaroundReports() {
        await this.lnk_reports.click()
        await this.lnk_turnaroundReports.click()
    }
    async VerifyActivityReports() {
        await this.lnk_reports.click()
        await this.lnk_activityReports.click()
    }
    async VerifyLifeOfLoanRevisionReports() {
        await this.lnk_reports.click()
        await this.lnk_lifeRevisionReport.click()
    }
   
}