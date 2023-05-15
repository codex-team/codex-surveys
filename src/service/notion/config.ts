/**
 * NotionConfig - configuration for notion's connection
 */
export type NotionConfig = {
  /**
   * Notion database id. Get from url - https://www.notion.so/<databaseId>?v=<long_hash_2>
   */
  databaseId: string;
  /**
   * Notion client secret for authentication. Get from integration - https://www.notion.so/my-integrations
   */
  clientSecret: string;
  /**
   * Notion api url, if you are using proxy or other version, you can change it.
   *
   * @default "https://api.notion.com/v1"
   */
  saveEndpoint?: string;
};
