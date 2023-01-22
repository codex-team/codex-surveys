# CodeX Surveys

A simple widget to collect users' feedback.

![EditorJS](https://user-images.githubusercontent.com/26390210/213203142-43ec30cc-5297-4565-8c4a-c72b2c331e31.jpeg)

## How to use Surveys

1.  Create Notion [integration](https://www.notion.so/my-integrations)
2.  Create Notion [database](https://www.notion.so/help/guides/creating-a-database)
3.  Add connection to database
    Right menu > Connections > Add connection

4.  Install the package

```bash
  yarn add @codexteam/surveys
```

5.  Add widget to your page

```javascript
import { CodeXSurveys } from '@codexteam/surveys';

const widget = new CodeXSurveys({
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
  widget: {
    title: 'Using Editor.js?',
    description: 'Take a 2-minutes survey🙏',
  },
});
```
