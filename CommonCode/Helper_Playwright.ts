import { GlobalVariables } from './globalVariables';
import * as playwright from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { Dictionary } from './Helper_Miscellaneous';
import * as HMisc from '../CommonCode/Helper_Miscellaneous'


export async function ClickOnTaxServices(globals: GlobalVariables): Promise<boolean> {
    await globals.gPage.click('div.LandingPageH2HeaderText:text("Tax Services")');
    console.log("Done clicking on 'Tax Services'");
    await globals.gPage.waitForLoadState('networkidle');
    return true;
}

export async function ClickOnTaxServices_Link(globals: GlobalVariables, linkNow: string): Promise<boolean> {
    await globals.gPage.click(`text=${linkNow}`);
    console.log("Done clicking on '" + linkNow + "'");
    await globals.gPage.waitForLoadState('networkidle');    
    return true;
}

export async function ClickOnLinkById(globals: GlobalVariables, linkId: string): Promise<boolean> {
    await globals.gPage.click(`id=${linkId}`);
    console.log("Done clicking on link Id: '" + linkId + "'");
    await globals.gPage.waitForLoadState('networkidle');    
    return true;
}

export async function ClickOnLinkByText(globals: GlobalVariables, linkText: string): Promise<boolean> {
    await globals.gPage.click(`text=${linkText}`);
    console.log("Done clicking on link text: '" + linkText + "'");
    await globals.gPage.waitForLoadState('networkidle');
    return true;
}

export async function ClickOnHamburgerLinkByText(globals: GlobalVariables, linkText: string): Promise<boolean> {
    await globals.gPage.click(`div#ctl00_ucSidebar_ITX a:text("${linkText}")`);
    console.log("Done clicking the hamburger - on link text: '" + linkText + "'");
    await globals.gPage.waitForLoadState('networkidle');    
    return true;
}

export async function TypeInTextBoxById(globals: GlobalVariables, TextInputId: string, TextToType: string): Promise<boolean>
{
    await globals.gPage.type('#' + TextInputId, TextToType);
    console.log("Done typing text '" + TextToType + "' in text input id '" + TextInputId + "'");
    return true;
}

export async function selectDropdownByOffset(globals: GlobalVariables, dropdownId: string, offset: number): Promise<boolean> {
    const dropdown = await globals.gPage.$(`#${dropdownId}`);
    if (!dropdown) {
        throw new Error(`Dropdown with ID ${dropdownId} not found`);
    }
    await dropdown.click();
    await globals.gPage.selectOption(`#${dropdownId}`, { index: offset });
    await globals.gPage.waitForLoadState('networkidle');
    return true;
}

export async function SelectTableFirstRowAndClickOnSpecifiedOffsetLinkClick(globals: GlobalVariables, tableId: string, targetOffset: number): Promise<boolean> {
    // Construct a selector for the table
    const tableSelector = `#${tableId}`;

    // Locate the table
    const tableLocator = globals.gPage.locator(tableSelector);
    const tableExists = await tableLocator.count() === 1;

    if (!tableExists) {
        console.log('Table not found');
        return false;
    }

    // Locate the first row within the table that contains at least one td element
    const rowWithTdLocator = tableLocator.locator('tr:has(td)');
    const rowExists = await rowWithTdLocator.count() > 0;

    if (!rowExists) {
        console.log('No viable rows in the table');
        return false;
    }

    // Locate the target cell within the first viable row
    const targetCellLocator = rowWithTdLocator.first().locator(`td:nth-child(${targetOffset + 1})`);
    const cellExists = await targetCellLocator.count() === 1;
    await globals.gPage.waitForLoadState('networkidle');

    if (!cellExists) {
        console.log('Target offset is out of range');
        return false;
    }

    const cellContent = await targetCellLocator.textContent();
    console.log('Target cell value:', cellContent);

    // Click on the hyperlink inside the cell, if it exists
    const linkLocator = targetCellLocator.locator('a');
    const linkExists = await linkLocator.count() === 1;

    if (linkExists) {
        await linkLocator.click();
        return true;
    } else {
        console.log('No hyperlink found in the target cell');
        return false;
    }
}

export async function JustLogContentsOfTableFirstRowSpecifiedTD(globals: GlobalVariables, tableId: string, targetOffset: number): Promise<boolean> {
    // Construct a selector for the table
    const tableSelector = `#${tableId}`;

    // Locate the table
    const tableLocator = globals.gPage.locator(tableSelector);
    const tableExists = await tableLocator.count() === 1;

    if (!tableExists) {
        console.log('Table not found');
        return false;
    }

    // Locate the first row within the table that contains at least one td element
    const rowWithTdLocator = tableLocator.locator('tr:has(td)');
    const rowExists = await rowWithTdLocator.count() > 0;

    if (!rowExists) {
        console.log('No viable rows in the table');
        return false;
    }

    // Locate the target cell within the first viable row
    const targetCellLocator = rowWithTdLocator.first().locator(`td:nth-child(${targetOffset + 1})`);
    const cellExists = await targetCellLocator.count() === 1;

    if (!cellExists) {
        console.log('Target offset is out of range');
        return false;
    }

    const cellContent = await targetCellLocator.textContent();
    console.log('Target cell value:', cellContent);
    return true;
}

export async function ClickOnButtonById(globals: GlobalVariables, buttonId: string)
{
    await globals.gPage.waitForLoadState('networkidle');
    await globals.gPage.waitForSelector('#' + buttonId);
    await globals.gPage.click('#' + buttonId);
    console.log("Done clicking on button with id '" + buttonId);
    await globals.gPage.waitForLoadState('networkidle');
    return true;    
}

export async function DoubleClickOnButtonById(globals: GlobalVariables, buttonId: string)
{
    await globals.gPage.waitForLoadState('networkidle');
    await globals.gPage.waitForSelector('#' + buttonId);
    await globals.gPage.dblclick('#' + buttonId);
    console.log("Done clicking on button with id '" + buttonId);
    await globals.gPage.waitForLoadState('networkidle');
    return true;    
}

export async function SetUpImpersonate(globals: GlobalVariables, LenderID: string): Promise<boolean> 
{
    // Example call:
    //    expect(await helper_playwright.SetUpImpersonate(globals, "42590")).toBe(true);
    await ClickOnLinkById(globals, 'ctl00_ucHeader_GlobalSideBarMenuIcon');
    await TypeInTextBoxById(globals, 'txtSearchText', 'main');
    await ClickOnLinkById(globals, 'ctl00_ucSidebar_IAS_Items');
    await ClickOnLinkByText(globals, "Impersonate");
    await TypeInTextBoxById(globals, 'ctl00_cpBody_txtLenderID', LenderID);    
    await globals.gPage.keyboard.press('Tab');
    await ClickOnButtonById(globals, "ctl00_cpBody_Continue_Button");    
    return true;
}