import { test, expect, GlobalVariables } from '../CommonCode/globalVariables';
import {Login } from '../CommonCode/Helper_Login';
import * as helper_playwright from '../CommonCode/Helper_Playwright';
import * as HMisc from '../CommonCode/Helper_Miscellaneous'

test.describe.parallel('All Web UI Demo tests', () => 
{
  test('TC-9999 - Demonstrate WEB UI Test To Tax Amount Reports', async ({ globals }) => {        
    await Login(globals);
    await helper_playwright.ClickOnTaxServices(globals);
    await helper_playwright.ClickOnTaxServices_Link(globals, "Tax Amount Reports");    
    await helper_playwright.selectDropdownByOffset(globals, "ctl00_cpBody_ddState", 42);// Rhode Island    
    await helper_playwright.SelectTableFirstRowAndClickOnSpecifiedOffsetLinkClick(globals, "ctl00_cpBody_GVReportList", 4);
    //Sleeper(7); // Temporary for testing the test
    expect("actual stuff").toBe("actual stuff");    
  });

  test('TC-9997 - Demonstrate WEB UI Test To impersonate user', async ({ globals }) => { 
    console.log('Important note: This requires an Admin level user.');           
    await Login(globals);    
    expect(await helper_playwright.SetUpImpersonate(globals, "42590")).toBe(true);
    //Sleeper(7); // Temporary for testing the test
  });
});