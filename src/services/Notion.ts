import { Client } from '@notionhq/client';
import { InterfaceAPI } from './types';
import { Config } from '../types';

/** Class representing an interaction with Notion. */
export class Notion implements InterfaceAPI {
  public static instance: Notion;
  public notion: Client | null = null;
  public configuration?: Config;
  /**
   * Create and returns a Notion instance.
   *
   * @returns {Notion}
   */
  constructor() {
    if (!Notion.instance) {
      Notion.instance = this;
    }

    return Notion.instance;
  }
  /**
   * Create a Notion interaction.
   *
   * @param {Config} configuration - Configuration for init client.
   */
  public init(configuration: Config): void {
    this.configuration = configuration;
    this.initClient();
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
   * Authentication notion's client.
   */
  private initClient(): void {
    this.notion = new Client({
      auth: this.configuration?.notion.clientSecret,
    });
  }
}
