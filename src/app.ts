import { Form } from './form';
import { Notion } from './service/notion';
import { Configuration } from './types/widget';

/**
 * Create widget on the document
 *
 * @param {Configuration} configuration - Configuration for widget
 */
function createWidget(configuration: Configuration): void {
  const notion = new Notion(configuration.notion);

  new Form(
    {
      form: configuration.form,
      collapsedForm: configuration.collapsedForm,
    },
    (data: Record<string, FormDataEntryValue>) => {
      notion.send(data);
    }
  );
}

createWidget({
  notion: {
    databaseId: '<Notion Database ID>',
    clientSecret: '<Notion Client ID>',
  },
  form: {
    description:
      'We want to better understand your goals and requirements. Please, provide us some insights.',
    items: [
      {
        label: 'Product type',
        field: {
          name: 'product_type',
          type: 'select',
          options: ['B2B', 'B2C'],
        },
      },
      {
        label: 'Your product size',
        field: {
          type: 'select',
          name: 'product_size',
          options: ['<100 DAU', '100 DAU - 1000 DAU', '> 1000 DAU'],
        },
      },
      {
        label: 'Your software license',
        field: {
          name: 'software_license',
          type: 'select',
          options: ['Freeware / Open-Source', 'Permissive', 'Proprietary'],
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
});

export { createWidget };
