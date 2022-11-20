import { createSpan, make } from './helpers/htmlCreator';
import classes from './styles/collapsed.module.css';

/**
 * Create widget on the document
 */
function createWidget(): void {
  const container = make('div', classes.container);

  const titleContainer = createSpan('Using Editor.js?', classes.title);
  const descriptionContainer = createSpan(
    'Take a 2-minutes survey🙏',
    classes.description
  );

  container.appendChild(titleContainer);
  container.appendChild(descriptionContainer);

  document.body.appendChild(container);
}

createWidget();
