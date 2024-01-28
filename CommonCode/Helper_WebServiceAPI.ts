import * as Misc from './Helper_Miscellaneous';
import axios, { AxiosResponse } from 'axios';
import https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create an instance of https.Agent to ignore SSL certificate errors
export const agent = new https.Agent({  
    rejectUnauthorized: false // This will bypass SSL certificate validation entirely
  });

// #region dictionary type objects
export type ServiceDescription = {
    [key: string]: string;
};

export type DPostData = {
    [key: string]: string;
};

export type DPostHeaders = {
    [key: string]: string;
};
// #endregion dictionary type objects

// #region Web Service Token handling

export let currentFileModDateTime: Date | null = null;
export let TokenText: string | null = null;
const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirectory = dirname(currentFilePath);
const filePath = path.join(currentDirectory, 'token.txt');
console.log('Current Directory:', currentDirectory);

export async function GenerateToken(): Promise<string>
{
    let response: AxiosResponse<any, any> | null = null;
    let EndPointNow: string = '';  
    let dPostData: DPostData = {
    'client_id': 'fffc426a-0731-4f3a-a029-bfeb8854cf24',
    'scope': 'api://6df19211-dab3-4b4d-8997-1c4f88688035/.default',
    'client_secret': '8PX8Q~j3YL.WArpyh8B8iGdBwvzzesJ42lTH7apn',
    'grant_type': 'client_credentials'
    };

    let dPostHeaders: DPostHeaders = {
        'cookie':'fpc=Ars2cpG81d5CsB8GsxQnQk3sNZ2LAQAAAKSg-dwOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'gzip, deflate, br',
        'Connection': 'keep-alive'     
    };

    EndPointNow = "https://login.microsoftonline.com/66ffdeb6-5f04-476d-aa35-0255a401e04c/oauth2/v2.0/token"; 
    response = await sendPostRequest(
        EndPointNow
        , dPostData
        , dPostHeaders
        )
        
        TokenText = response.data.access_token;
        const defaultResponse = { data: { access_token: '' } }; // Default structure

        let authorizationHeader = `Bearer ${TokenText}`;
        console.log('authorizationHeader:\n' + authorizationHeader);
    
        return authorizationHeader;        
}

export async function GetToken(): Promise<string>
{
    let authorizationHeader: string = '';
        
    if (!fs.existsSync(filePath)) {
        if(!writeToTokenFile(await GenerateToken()))
        {
            throw new Error("Unable to generate and write to new file token.txt the authorization token");
        }        
    }

    if(!await updateCurrentFileModDateTime())
    {
        throw new Error("Unable to get token file statistics");
    }

    const now = new Date();
    // Check if last modified date is within the last 50 minutes
    if (currentFileModDateTime && now.getTime() - currentFileModDateTime.getTime() < 50 * 60 * 1000) {
        // current file contents are good to use:        
        
    }
    else
    {
        // current file contents are old - create new file content:
        if(!writeToTokenFile(await GenerateToken()))
        {
            throw new Error("Unable to generate and write to existing file token.txt the authorization token");
        }        
    }

    authorizationHeader = await readFromTokenFile();

    return authorizationHeader;
}

export async function updateCurrentFileModDateTime(): Promise<boolean>
{
    try {        
        const stats = fs.statSync(filePath);
        currentFileModDateTime = stats.mtime;
    } catch (error) {
        console.error("Error accessing file:", error);
        currentFileModDateTime = null;
    }
    return true;
}

export async function writeToTokenFile(tokenText: string): Promise<boolean> {
    try {        
        fs.writeFileSync(filePath, tokenText);
        console.log('Token text written to token.txt successfully.');
        return true;
    } catch (error) {
        console.error('Error writing to token.txt:', error);
        return false;
    }
}

export async function readFromTokenFile(): Promise<string> {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return fileContent;
    } catch (error) {
        console.error('Error reading from token.txt:', error);
        return '';
    }
}

// #endregion Web Service Token handling

export async function ReturnJSONText(jsonFilePath: string): Promise<string>
{
    let JSONBody =  await Misc.readJsonFile(jsonFilePath);
    return JSONBody;
}

export async function sendPostRequest(
      EndPointNow: string
    , dPostData: DPostData | '' = ''
    , dPostHeaders: DPostHeaders
    , JSONText: string = ''
    ): Promise<AxiosResponse<any, any>> 
{
    const postData = new URLSearchParams(dPostData).toString();

    if(JSONText == '')
    {
        try 
        {
            const postData = new URLSearchParams(dPostData);

            const response = await axios.post(
                EndPointNow,
                postData,                
                {
                    httpsAgent: agent,  
                    headers: dPostHeaders 
                }
            );
            return response; // Return response data directly
        } catch (error) 
        {
            console.error('Error making POST request:', error);
            throw error;
        }
    }
    else
    {
        try {
            const postData = JSONText;

            const response = await axios.post(
                EndPointNow,
                postData,
                {
                    httpsAgent: agent,  
                    headers: dPostHeaders 
                }
            );
            return response; // Return response data directly
        } catch (error) {
            console.error('Error making POST request:', error);
            throw error;
        }
    }
}
