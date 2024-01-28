// CommonCode/Helper_Login.ts
import { GlobalVariables } from './globalVariables';
import * as playwright from 'playwright';
import {Sleeper} from './Helper_Miscellaneous';

export async function Login(globals: GlobalVariables): Promise<void> {
    console.log("  From Login:");
    console.log("     GlobalVariables.Environment - Name = " + globals.Environment.Name);
    console.log("     GlobalVariables.Environment - URL = " + globals.Environment.URL);
    await globals.gPage.goto(globals.Environment.URL);  
    await globals.gPage.fill('#ctl00_cpBody_Login1_UserName', globals.Environment.user);
    await globals.gPage.fill('#ctl00_cpBody_Login1_Password', globals.Environment.password);
    await globals.gPage.click('#ctl00_cpBody_Login1_Submit');    
    console.log("Done Login");
}
