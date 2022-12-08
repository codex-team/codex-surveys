import { Client } from '@notionhq/client';
import { Service } from './Service';
import { NotionConfig } from './Config';

/** Class representing an interaction with Notion. */
export class Notion implements Service<NotionConfig> {
  public static instance: Notion;
  public notion: Client | null = null;
  public configuration?: NotionConfig;
  /**
   * Create and returns a Notion instance.
   *
   * @param configuration - Configuration for connection
   * @returns {Notion}
   */
  constructor(configuration: NotionConfig) {
    if (!Notion.instance) {
      Notion.instance = this;
      this.configuration = configuration;
      this.init();
    }

    return Notion.instance;
  }
  /**
   * Send data to notion's database
   *
   * @param {string} content - Data for request
   */
  public async sendData(content: string): Promise<void> {
    if (!this.configuration) {
      return Promise.reject();
    }

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
   *  Authentication notion's client.
   */
  private init(): void {
    this.notion = new Client({
      auth: this.configuration?.notion.clientSecret,
    });
  }
}
