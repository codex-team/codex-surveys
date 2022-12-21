import { NotionConfig } from './service/notion/config';
import { FormConfig, TypeField } from './types/form';

/**
 * Notion configuration for testing
 */
export const exampleConfiguration: { notion: NotionConfig; form: FormConfig } =
  {
    /**
     * API configuration
     */
    notion: {
      /**
       * Notion database id
       */
      databaseId: '',
      /**
       * Client secret from integration
       */
      clientSecret: '',
    },
    form: {
      description:
        'We want to better understand your goals and requirements. Please, provide us some insights.',
      items: [
        {
          label: 'Your end user',
          field: {
            name: 'end_user',
            type: TypeField.Select,
            options: [
              {
                name: 'B2B',
                value: 'B2B',
              },
              {
                name: 'B2C',
                value: 'B2C',
              },
            ],
          },
        },
        {
          label: 'Your product size',
          field: {
            type: TypeField.Select,
            name: 'product_size',
            options: [
              {
                name: '<100 DAU',
                value: '<100 DAU',
              },
              {
                name: '100 DAU - 1000 DAU',
                value: '100 DAU - 1000 DAU',
              },
              {
                name: '> 1000 DAU',
                value: '> 1000 DAU',
              },
            ],
          },
        },
        {
          label: 'Your software license',
          field: {
            name: 'software_license',
            type: TypeField.Select,
            options: [
              {
                name: 'Freeware / Open-Source',
                value: 'Freeware / Open-Source',
              },
              {
                name: 'Permissive',
                value: 'Permissive',
              },
              {
                name: 'Proprietary',
                value: 'Proprietary',
              },
            ],
          },
        },
        {
          label: 'Your suggestions to the Editor.js',
          field: {
            name: 'suggestions',
            type: TypeField.Textarea,
            placeholder: 'Enter your ideas, requests or issues',
          },
        },
        {
          field: {
            type: TypeField.Submit,
            textContent: 'Submit',
          },
        },
      ],
    },
  };
