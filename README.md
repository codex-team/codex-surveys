# CodeX Surveys

A simple widget to collect users' feedback.

<img width="648" alt="surveys" src="https://user-images.githubusercontent.com/26390210/213229181-5bc1e5b2-65b5-4ee6-80f6-1bfcbc9b45ea.png">

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
