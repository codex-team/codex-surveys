import { Client } from '@notionhq/client';
import { Config } from '../types';

/** Class representing a interaction with Notion. */
export class Notion {
  public notion: Client | null = null;
  public configuration: Config | null = null;
  /**
   * Create a Notion interaction.
   *
   * @param {Config} configuration - Configuration for init client.
   */
  constructor(configuration: Config) {
    this.configuration = configuration;
    this.initClient();
  }
  /**
   * Send data to notion's database
   *
   * @param {string} content - Data for request
   */
  public async sendData(content: string): Promise<void> {
    await this.notion?.pages.create({
      // eslint-disable-next-line @typescript-eslint/naming-convention -- database_id is the argument of Notion sdk
      parent: { database_id: this.configuration?.notion.databaseId || '' },
      properties: {
        title: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content,
              },
            },
          ],
        },
      },
    });
  }
  /**
   * Authentication notion's client.
   *
   */
  private initClient(): void {
    this.notion = new Client({
      auth: this.configuration?.notion.clientSecret,
    });
  }
}
