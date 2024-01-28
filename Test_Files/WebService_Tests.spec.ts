import { readFile } from 'fs/promises';
import { test, expect, GlobalVariables } from '../CommonCode/globalVariables';
import * as HWebAPI from '../CommonCode/Helper_WebServiceAPI';
import { chromium, APIResponse } from 'playwright';
import * as HMisc from '../CommonCode/Helper_Miscellaneous'
import axios, { AxiosResponse } from 'axios';

test.describe.parallel('All Web Service API Address tests', () => 
{
  test('TC-40509 - Validate SingleLine Endpoint', async ({ globals }) => 
  {  
    
    
    // When using a payload file then DPostData is '' and we pass the
    // string value of the contents of the payload file:
    const jsonFilePath = process.cwd() + '\\Payload_Files\\tc40509.json';
    let JSONText:string = await HWebAPI.ReturnJSONText(jsonFilePath);
    console.log('JSONText=\n' + JSONText + '\n');
    
    // Obtain the token to use as authorization:
    let authorizationHeader:string = await HWebAPI.GetToken();    
    expect(authorizationHeader).not.toBeNull();
    expect(authorizationHeader).not.toBe('');

    // Create the dictionary of headers including the use
    // of the above authorizationHeader as follows:
    let dPostHeaders: HWebAPI.DPostHeaders = {
      'Authorization':authorizationHeader,
      'Content-Type':'application/json',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection':'keep-alive',
      'httpsAgent': 'agent'
    };

    let response: AxiosResponse<any, any> | null = null;  
    let EndPointNow:string = "https://" + globals.Environment.EndpointPrefix + "/AddressValidationAPI/api/Address/ValidateSingleLineAddresses"; 
    response = await HWebAPI.sendPostRequest(
      EndPointNow
      , ''
      , dPostHeaders
      , JSONText
      )

      console.log("Response Status: " + response.status);
      expect(response.status).toBe(202); 
      console.log('response.statusText: ' + response.statusText);
      expect(response.statusText).toBe('Accepted');
      let allData: string = JSON.stringify(response.data, null, 2); 
      console.log(allData); // Logs the entire data string to the console
      let mySearch: string = "S810";
      if (allData.includes(mySearch)) 
      {
      console.log("The string contains " + mySearch); 
      }
      else
      {
      console.log("The string does not contain " + mySearch); 
      }
      expect(allData.includes(mySearch)).toBeTruthy();
  });

  test('TC-40510 - Validate SingleLine Endpoint', async ({ globals }) => 
  {  
    
    
    // When using a payload file then DPostData is '' and we pass the
    // string value of the contents of the payload file:
    const jsonFilePath = process.cwd() + '\\Payload_Files\\tc40510.json';
    let JSONText:string = await HWebAPI.ReturnJSONText(jsonFilePath);
    console.log('JSONText=\n' + JSONText + '\n');
    
    // Obtain the token to use as authorization:
    let authorizationHeader:string = await HWebAPI.GetToken();    
    expect(authorizationHeader).not.toBeNull();
    expect(authorizationHeader).not.toBe('');

    // Create the dictionary of headers including the use
    // of the above authorizationHeader as follows:
    let dPostHeaders: HWebAPI.DPostHeaders = {
      'Authorization':authorizationHeader,
      'Content-Type':'application/json',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection':'keep-alive',
      'httpsAgent': 'agent'
    };

    let response: AxiosResponse<any, any> | null = null;  
    let EndPointNow:string = "https://" + globals.Environment.EndpointPrefix + "/AddressValidationAPI/api/Address/ValidateSingleLineAddresses"; 
    response = await HWebAPI.sendPostRequest(
      EndPointNow
      , ''
      , dPostHeaders
      , JSONText
      )

      console.log("Response Status: " + response.status);
      expect(response.status).toBe(202); 
      console.log('response.statusText: ' + response.statusText);
      expect(response.statusText).toBe('Accepted');
      let allData: string = JSON.stringify(response.data, null, 2); 
      console.log(allData); // Logs the entire data string to the console
      let mySearch: string = "SA00";
      if (allData.includes(mySearch)) 
      {
      console.log("The string contains " + mySearch); 
      }
      else
      {
      console.log("The string does not contain " + mySearch); 
      }
      expect(allData.includes(mySearch)).toBeTruthy();
  });

  });