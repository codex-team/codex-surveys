import { make } from '../utils/make';
import classes from '../styles/collapsed.module.css';

/** Class for creating Feedback form */
export class Form {
  /**
   * Form container
   */
  public container: HTMLElement;
  /**
   * Create container for form
   */
  constructor() {
    this.container = make('div', classes.container);
    this.createForm();
  }

  /**
   * Create and add form to document
   */
  private createForm(): void {
    const titleContainer = make('span', classes.title, {
      textContent: 'Using Editor.js?',
    });

    const descriptionContainer = make('span', classes.description, {
      textContent: 'Take a 2-minutes survey🙏',
    });

    this.container.appendChild(titleContainer);
    this.container.appendChild(descriptionContainer);

    document.body.appendChild(this.container);
  }
}
