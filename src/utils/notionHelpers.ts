import { exampleConfiguration } from '../configuration';
import { Notion } from '../services/Notion';

/**
 * Send user's data to Notion
 *
 * @param {string} text - Text for request to database
 */
export function sendDataToNotion(text: string): void {
  console.log(exampleConfiguration)
  const notion = new Notion(exampleConfiguration);

  notion.sendData(text);
}
