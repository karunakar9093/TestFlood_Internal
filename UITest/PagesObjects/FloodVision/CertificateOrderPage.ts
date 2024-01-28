import { Page, expect } from "@playwright/test";
export default class CertificateOrderPage {

    constructor(public page: Page) { }

    lnk_disputesQueue = this.page.locator("//li/a[text()='Disputes Queue']")
    txt_disputesQueueHeaderLoc = this.page.locator("//div/span[text()='Dispute Queue']")
    lnk_duplicateQueueLoc = this.page.locator("//li/a[text()='Duplicates Queue']")
    txt_duplicateQueueHeaderLoc = this.page.locator("//div/span[text()='Duplicate Queue']")
    lnk_cancelQueueLoc = this.page.locator("//li/a[text()='Cancel Queue']")
    txt_cencelQueueHeaderLoc = this.page.locator("//div/span[@id='lblPageHeading' and text()='Cancel Queue']")
    lnk_maintenanceLoc = this.page.locator("//li/a[text()='Maintenance']")
    txt_maintenanceHeaderLoc = this.page.locator("//h2[text()='Maintenance']")
    lnk_preferenceLoc = this.page.locator("//li/a[text()='Preference']")
    txt_preferenceHeaderLoc = this.page.locator("//span[text()='Preferences']")
    lnk_certificateHeaderLoc = this.page.locator("//a[text() = 'Certificate']")
    lnk_certificateNew= this.page.locator("//a[text()='New']")
    ipt_clientIdLoc= this.page.locator("//input[contains(@id,'_txtClientId')]")
    ipt_requestedByLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtRequestedBy']")
    ipt_lastNameLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtBrwr1LastName']")
    ipt_firstNameLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtBrwr1FirstName'] | //input[contains(@name, 'ClientNameFirst')]")
    ipt_address1Loc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtAddress1']")
    ipt_zipLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtZip']")
    ipt_cityLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtCity']")
    ipt_stateLoc= this.page.locator("//input[@id='ctl00_ContentPlaceHolderBody_txtState']")
    btn_submitButtonLoc= this.page.locator("//input[@class='btn btn-primary']")
    txt_certificateNo= this.page.locator
    ("(//span[contains(text(), 'Certificate# :')]//following-sibling::span)[1][@class = 'UIRefreshValue']")
    txt_p2ClientIdLoc= this.page.locator("//span[text()='P2 Client ID :']/following-sibling::*[position()=1]")
    txt_certificateStatus= this.page.locator("//span[text()='Status :']/following-sibling::*[position()=1]")
    txt_certificateSuccess= this.page.locator("//*[contains(text(), 'new certificate has been created with Certificate No')]")
    btn_searchButtonLoc= this.page.locator("(//input[contains(@class,'UIRefreshActionButton')])[1]")
    ipt_CertIdent =this.page.locator("//input[contains(@id,'_txtCertIdent')]")
    lnk_searchLinkLoc =this.page.locator("//a[text()='Search']")
    lnk_clientHeaderLoc = this.page.locator("//a[text() = 'Client']")
    ipt_clientEdit = this.page.locator("//input[@value = 'Edit']")
    ipt_clientSave = this.page.locator("//input[@value = 'Save']")
    txt_clientUpdateMsg= this.page.locator("(//*[contains(text(), 'Client details updated successfully')])[1]")

    async clkDisputesQueue() {
        await this.lnk_disputesQueue.waitFor({ state: "visible" })
        await this.lnk_disputesQueue.click()
    }
    async VerifyDisputeQueueHeaderisDisplayed() {
        await this.txt_disputesQueueHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_disputesQueueHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clkDuplicatesQueue() {
        await this.lnk_duplicateQueueLoc.waitFor({ state: "visible" })
        await this.lnk_duplicateQueueLoc.click()
    }
    async VerifyDuplicatesQueueHeaderisDisplayed() {
        await this.txt_duplicateQueueHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_duplicateQueueHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clkCancelQueue() {
        await this.lnk_cancelQueueLoc.waitFor({ state: "visible" })
        await this.lnk_cancelQueueLoc.click()
    }
    async VerifyCancelQueueHeaderisDisplayed() {
        await this.txt_cencelQueueHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_cencelQueueHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clkMaintenancetab() {
        await this.lnk_maintenanceLoc.waitFor({ state: "visible" })
        await this.lnk_maintenanceLoc.click()
    }
    async VerifyMaintenanceDisplayed() {
        await this.txt_maintenanceHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_maintenanceHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clkPreferencetab() {
        await this.lnk_preferenceLoc.waitFor({ state: "visible" })
        await this.lnk_preferenceLoc.click()
    }
    async VerifyPreferenceDisplayed() {
        await this.txt_preferenceHeaderLoc.waitFor({ state: "visible" })
        var isVisible = await this.txt_preferenceHeaderLoc.isVisible();
        expect(isVisible).toBeTruthy();
    }
    async clkCertificateHeaderLoc() {
        await this.lnk_certificateHeaderLoc.waitFor({ state: "visible" })
        await this.lnk_certificateHeaderLoc.click()
    }
    async clkCertificateNew() {
        await this.lnk_certificateNew.waitFor({ state: "visible" })
        await this.lnk_certificateNew.click()
    }

    async orderFormFill(p2ClientId: string, lName: string, fName: string, address:
        string, city: string, zip: string, state: string) {
        await this.ipt_clientIdLoc.fill(p2ClientId)
        await this.ipt_requestedByLoc.fill(lName)
        await this.ipt_lastNameLoc.fill(lName)
        var timestamp = Number(new Date()); // current time as number
        const txt = "_" + timestamp
        await this.ipt_firstNameLoc.fill(txt)
        await this.ipt_address1Loc.fill(address)
        await this.ipt_cityLoc.fill(city)
        await this.ipt_zipLoc.fill(zip)
        await this.ipt_stateLoc.fill(state)
    }
    async clkSubmitBtn() {
        await this.btn_submitButtonLoc.waitFor({ state: "visible" })
        await this.btn_submitButtonLoc.click()
    }
    async verifyCertificateGenerated(actualp2ClientId: string) {
        await this.txt_certificateSuccess.highlight()
        var certificateSuccess = await this.txt_certificateSuccess.textContent()
        await this.txt_certificateNo.waitFor({ state: "visible" })
        var expectedcertificateNo = await this.txt_certificateNo.textContent()
        var expectedp2ClientId = await this.txt_p2ClientIdLoc.textContent()
        var expectedStatus = await this.txt_certificateStatus.textContent()
        expect(certificateSuccess).toContain("new certificate has been created with Certificate No"?.trim());
        expect(actualp2ClientId?.trim()).toBe(expectedp2ClientId?.trim());
        expect("Completed").toContain(expectedStatus?.trim());
        expect(expectedcertificateNo).not.toEqual(null);
    }

    async SearchverifyCertificateGenerated(actualp2ClientId: string) {
        await this.txt_certificateSuccess.highlight()
        await this.txt_certificateNo.waitFor({ state: "visible" })
        var expectedcertificateNo = await this.txt_certificateNo.textContent()
        await this.lnk_searchLinkLoc.click()
        await this.ipt_CertIdent.fill(String(expectedcertificateNo));
        await this.btn_searchButtonLoc.click()
        var expectedcertificateNo = await this.txt_certificateNo.textContent()
        expect(expectedcertificateNo).not.toEqual(null);
    }

    async clkClientTab() {
        await this.lnk_clientHeaderLoc.waitFor({ state: "visible" })
        await this.lnk_clientHeaderLoc.click()
    }
    async clkClientSearch() {
        await this.lnk_searchLinkLoc.waitFor({ state: "visible" })
        await this.lnk_searchLinkLoc.click()
    }
    async editClientForm(p2ClientId: string) {

        await this.ipt_clientIdLoc.fill(p2ClientId)
        await this.btn_searchButtonLoc.click()
        await this.ipt_clientEdit.waitFor({ state: "visible" })
        await this.ipt_clientEdit.click()
        const txt = "EDIT"
        await this.ipt_firstNameLoc.clear()
        await this.ipt_firstNameLoc.fill(txt)
        await this.ipt_clientSave.click()
        await this.txt_clientUpdateMsg.highlight()
        var clientUpdate = await this.txt_clientUpdateMsg.textContent()
        expect(clientUpdate).toContain("Client details updated successfully"?.trim());
    }
}