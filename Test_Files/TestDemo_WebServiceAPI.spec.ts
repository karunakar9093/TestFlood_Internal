import { readFile } from 'fs/promises';
import { test, expect, GlobalVariables } from '../CommonCode/globalVariables';


test('TC-9998 - Demonstrate Payload WEB Service - API - Test To Tax Amount Reports', async ({ request, globals }) => {
  // Path to the XML payload file
  const xmlFilePath = process.cwd() + '\\Payload_Files\\API_accepts_the_XML_payload.xml';

  // Read the XML payload from the file
  const xmlPayload = await readFile(xmlFilePath, 'utf8');

  // Set the headers for XML content
  const headers = {
    'Content-Type': 'application/xml'
  };

  // Send the POST request with the XML payload
  const response = await request.post('https://uatb2b.leretanet.com/floodctl/api/FloodRequest/FloodRequest', {
    headers: headers,
    data: xmlPayload
  });

  // Log the response status
  console.log("Response Status: " + response.status());

  // Assert the response status
  expect(response.ok()).toBeTruthy();
});


