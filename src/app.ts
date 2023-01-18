import { Form } from './form';
import { Notion } from './service/notion';
import { NotionConfig } from './service/notion/config';
import { FormConfig } from './types/form';
import { CollapsedFormConfig } from './types/collapsedForm';

/**
 * Entry function for widget
 */
window.survey = {
  /**
   * Load notion client data
   * 
   * @param {NotionConfig} [configuration] - client configuration
   * @returns {Notion}
   */
  load: (configuration: NotionConfig) => {
    return new Notion(configuration);
  },
   /**
   * Create widget
   * 
   * @param {NotionConfig} [configuration] - client configuration
   * @returns {Notion}
   */
  createForm: (
    configuration: {
      form: FormConfig;
      collapsedForm: CollapsedFormConfig;
    },
    sumbitEvent?: (data: Record<string, FormDataEntryValue>) => void
  ) => {
    new Form(configuration, sumbitEvent);
  },
};

const createWidget = () => {
  const notion = window.survey.load({
    databaseId: '<Notion Database ID>',
    clientSecret: '<Notion Client ID>',
  });

  window.survey.createForm(
    {
      form: {
        description:
          'We want to better understand your goals and requirements. Please, provide us some insights.',
        items: [
          {
            label: 'Product type',
            field: {
              name: 'product_type',
              type: 'select',
              options: [ 'B2B', 'B2C' ]
            },
          },
          {
            label: 'Your product size',
            field: {
              type: 'select',
              name: 'product_size',
              options: ['<100 DAU', '100 DAU - 1000 DAU', '> 1000 DAU']
            },
          },
          {
            label: 'Your software license',
            field: {
              name: 'software_license',
              type: 'select',
              options: ['Freeware / Open-Source', 'Permissive', 'Proprietary']
            },
          },
          {
            label: 'Your suggestions to the Editor.js',
            field: {
              name: 'suggestions',
              type: 'textarea',
              placeholder: 'Enter your ideas, requests or issues',
            },
          },
        ],
      },
      collapsedForm: {
        title: 'Using Editor.js?',
        description: 'Take a 2-minutes survey🙏',
      },
    },
    (data) => {
      notion.send(data);
    }
  );
};

createWidget()