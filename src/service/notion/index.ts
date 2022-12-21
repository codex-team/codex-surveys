import { Client } from '@notionhq/client';
import { Service } from '../service';
import { NotionConfig } from './config';

/**
 * Class representing an interaction with Notion.
 */
export class Notion implements Service {
  /**
   * Client for notion api
   */
  public notion: Client | null = null;

  /**
   * Config for database connection
   */
  private configuration?: NotionConfig;

  /**
   * Create and returns a Notion instance.
   *
   * @param configuration - Configuration for connection
   */
  constructor(configuration: NotionConfig) {
    this.configuration = configuration;
    this.init();
  }

  /**
   * Request for sending data from form to database
   *
   * @param {Record<string, FormDataEntryValue>} content - Form data
   */
  public async send(
    content: Record<string, FormDataEntryValue>
  ): Promise<void> {
    if (!this.configuration) {
      return Promise.reject();
    }

    const properties = Object.keys(content).reduce(
      (current, key) =>
        Object.assign(current, {
          [key]: {
            type: 'rich_text',
            // eslint-disable-next-line @typescript-eslint/naming-convention -- rich_text is the argument of Notion api
            rich_text: [
              {
                type: 'text',
                text: { content: content[key] },
              },
            ],
          },
        }),
      {}
    );

    await this.notion?.pages.create({
      // eslint-disable-next-line @typescript-eslint/naming-convention -- database_id is the argument of Notion sdk
      parent: { database_id: this.configuration?.databaseId || '' },
      properties,
    });
  }

  /**
   *  Authentication notion's client.
   */
  private init(): void {
    this.notion = new Client({
      auth: this.configuration?.clientSecret,
    });
  }
}
