import { Form } from './form';
import { Notion } from './service/notion';
import { exampleConfiguration } from './configuration';

/**
 * Create widget on the document
 */
function createWidget(): void {
  const form = new Form();
  const notion = new Notion(exampleConfiguration);

  form.container.addEventListener('click', () => {
    notion.send('Hello');
  });
}

createWidget();
