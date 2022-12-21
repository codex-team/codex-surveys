import { Form } from './form';
import { Notion } from './service/notion';
import { exampleConfiguration } from './configuration';

/**
 * Create widget on the document
 */
function createWidget(): void {
  const widget = new Form(exampleConfiguration.form);
  const notion = new Notion(exampleConfiguration.notion);

  widget.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(widget.form || undefined).entries()
    );

    notion.send(data);
    widget.collapseWidget();
  });
}

createWidget();
