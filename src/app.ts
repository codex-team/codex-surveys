import { Form } from './form';
import { Notion } from './service/notion';
import { exampleConfiguration } from './configuration';

/**
 * Create widget on the document
 */
function createWidget(): void {
  const notion = new Notion(exampleConfiguration.notion);

  new Form(
    {
      form: exampleConfiguration.form,
      collapsedForm: exampleConfiguration.collapsedForm,
    },
    (data: Record<string, FormDataEntryValue>) => {
      notion.send(data);
    }
  );
}

createWidget();
