/**
 * Api for sending data to Notion
 */
export type API = Record<
  string,
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- rich_text is the argument of Notion api
    rich_text: Array<{
      /**
       * Type of column
       */
      text: {
        /**
         * Data for column
         */
        content: string;
      };
      type?: 'text';
    }>;
    /**
     * Type of data
     */
    type?: 'rich_text';
  }
>;
