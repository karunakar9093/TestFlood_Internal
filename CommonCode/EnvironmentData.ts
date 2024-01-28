// CommonCode/EnvironmentData.ts
import { readFile } from 'fs/promises';

export interface Environment {
  Name: string;
  URL: string;
  EndpointPrefix: string;
  user: string;
  password: string;
  special:string;
  // ... include other properties that an Environment object should have
}

// Important: run this first $env:EnvironmentNow = "UAT-CHROME-REPORTS-LOCAL"
export async function getEnvironmentByName(name: string): Promise<Environment> {
  try {
    // Read the file asynchronously
    const data = await readFile(new URL('./Environment.json', import.meta.url), 'utf8');
    // Parse the file content as JSON
    const parsedData = JSON.parse(data);

    // Find the environment with the given Name
    const environment = parsedData.Environments.find((env: Environment) => env.Name === name);

    if (!environment) {
      // If the environment is not found, throw an error
      throw new Error('Environment with the given name not found.');
    }

    return environment; // This should be of type Environment
  } catch (error) {
    // Log the error and rethrow it to be handled by the caller
    console.error('Error when attempting to get environment:', error);
    throw error;
  }
}
