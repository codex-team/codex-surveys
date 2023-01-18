import { Form } from './form';
import { Notion } from './service/notion';
import { Configuration } from './types/configuration';

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
      collapsedForm: configuration.widget,
    },
    (data: Record<string, FormDataEntryValue>) => {
      notion.send(data);
    }
  );
}

export { createWidget };
