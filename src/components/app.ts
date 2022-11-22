import { make } from './helpers/htmlCreator';
import classes from './styles/collapsed.module.css';
import { addItem } from "../services/Notion"

/**
 * Create widget on the document
 */
function createWidget(): void {
  const container = make('div', classes.container);

  const titleContainer = make('span', classes.title, {
    textContent: 'Using Editor.js?',
  });

  const descriptionContainer = make('span', classes.description, {
    textContent: 'Take a 2-minutes survey🙏',
  });

  container.appendChild(titleContainer);
  container.appendChild(descriptionContainer);

  document.body.appendChild(container);

  addItem("Privet Tanya")
}

createWidget();
