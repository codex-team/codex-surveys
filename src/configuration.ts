import { NotionConfig } from './service/notion/config';
import { FormConfig, TypeField } from './types/form';
import { CollapsedFormConfig } from './types/collapsedForm';

/**
 * Notion configuration for testing
 */
export const exampleConfiguration: {
  notion: NotionConfig;
  collapsedForm: CollapsedFormConfig;
  form: FormConfig;
} = {
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
  /**
   * Configuration for collapsed form
   */
  collapsedForm: {
    title: 'Using Editor.js?',
    description: 'Take a 2-minutes survey🙏',
  },
  /**
   * Configuration for full form
   */
  form: {
    description:
      'We want to better understand your goals and requirements. Please, provide us some insights.',
    items: [
      {
        label: 'Product type',
        field: {
          name: 'product_type',
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
