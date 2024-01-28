import { readFile } from 'fs/promises';

type APIResponse = {
    [key: string]: any; // Or a more specific type if applicable
};


export type Dictionary<K extends string, T> = {
    [key in K]?: T;
};

export async function Sleeper(seconds: number = 10): Promise<void> {
    const date = Date.now();
    let currentDate;
    do {
    currentDate = Date.now();
    } while (currentDate - date < (seconds * 1000));
}

export function iterateDictionaryValues<K extends string, T>(dict: Dictionary<K, T>): void {
    console.log('\n--- DICTIONARY VALUES - START ---\n');
    for (const key in dict) {
        if (dict.hasOwnProperty(key)) {
            const value = dict[key];
            // Perform your operation with value
            console.log('key:' + key + ' value: ' + value);
        }
    }
    console.log('\n--- DICTIONARY VALUES - DONE ---\n');
}


export function IterateAPIResponseObjectProperties(FullResponse: APIResponse): void {
    console.log('\n--- APIResponse PROPERTIES - START ---\n');
    for (const key in FullResponse) {
        if (FullResponse.hasOwnProperty(key)) {
            let value = FullResponse[key];
            if (typeof value === 'object' && value !== null) {
                // Convert object to a string for better visualization
                value = JSON.stringify(value, null, 2); // The second and third argumentss format the output
        }
            console.log(`${key}: ${value}`);
        }
    }
    console.log('\n--- APIResponse PROPERTIES - STOP ---\n');
}


export async function readJsonFile(jsonFilePath: string): Promise<string> {
    // Read file content as a string
    const fileContent = await readFile(jsonFilePath, 'utf8');

    // Decode the URL encoded string
    const decodedContent = decodeURIComponent(fileContent);

    // Return the decoded content
    return decodedContent;
}
