import { NotionConfig } from './services/Config';

export const exampleConfiguration: NotionConfig = {
  notion: {
    databaseId: import.meta.env.VITE_NOTION_DATABASE_ID || '',
    clientSecret: import.meta.env.VITE_NOTION_CLIENT_SECRET || '',
  },
};
