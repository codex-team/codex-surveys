import { Form } from './services/Form';
import { Notion } from './services/Notion';
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
