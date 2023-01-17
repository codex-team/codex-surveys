# Codex surveys

A simple constructor for the feedback widget.

## How to use Surveys

### Basics

We have 2 global functions to use the widget:

```javascript
window.feedback = {
  load: (configuration: NotionConfig) => Notion, // for loading Notion client data
  createForm: (
    configuration: {
      form: FormConfig;
      collapsedForm: CollapsedFormConfig;
    },
    sumbitEvent?: (data: Record<string, FormDataEntryValue>) => void
  ) => void // create feedback form
};
```

### Installation Guide

1.  Create Notion [integration](https://www.notion.so/my-integrations)
2.  Create Notion [database](https://www.notion.so/help/guides/creating-a-database)
3.  Add connection to database
    Right menu > Connections > Add connection
4.  Installation:

- For development:

```bash
    yarn && yarn dev
```

- For production:

```bash
    yarn && yarn build
```

5.  Add widget to your page

For example:

```javascript
const createWidget = () => {
  const notion = window.feedback.load({
    databaseId: '<Notion Database ID>',
    clientSecret: '<Notion Client ID>',
  });

  window.feedback.createForm(
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
              type: 'select',
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
              type: 'select',
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
```
