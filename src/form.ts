import { make } from './utils/make';
import {
  createLabel,
  createDescription,
  mapperField
} from './utils/createField';
import classes from './styles/form.module.css';
import { FormConfig } from './types/form';

/**
 * Class for creating Feedback form
 */
export class Form {
  /**
   * Form container
   */
  public form: HTMLFormElement;

  /**
   * Widget container
   */
  private container: HTMLElement;

  /**
   * Configuration for form view
   */
  private configuration: FormConfig;

  /**
   * Create container for form
   *
   * @param configuration - Form configuration
   */
  constructor(configuration: FormConfig) {
    this.configuration = configuration;
    this.container = make('div', classes.container);
    this.form = this.createOpenForm();
    this.createMinimizedForm();
  }

  /**
   * Collapse widget
   */
  public collapseWidget(): void {
    this.container.classList.remove(classes.open);
  }

  /**
   * Open full widget
   */
  private openWidget(): void {
    this.container.classList.add(classes.open);
  }

  /**
   * Create and add collapsed form to document
   */
  private createMinimizedForm(): void {
    const formCollapsed = make('div', classes.collapsed);

    const titleContainer = make('span', classes.title, {
      textContent: 'Using Editor.js?',
    });

    const descriptionContainer = make('span', classes.description, {
      textContent: 'Take a 2-minutes survey🙏',
    });

    formCollapsed.appendChild(titleContainer);
    formCollapsed.appendChild(descriptionContainer);
    this.container.appendChild(formCollapsed);

    document.body.appendChild(this.container);

    formCollapsed.addEventListener('click', () => {
      if (this.container.className.includes(classes.open)) {
        this.collapseWidget();
      } else {
        this.openWidget();
      }
    });
  }

  /**
   * Create and add form to document
   *
   * @returns {HTMLFormElement}
   */
  private createOpenForm(): HTMLFormElement {
    const form = make('form', classes.form) as HTMLFormElement;

    if (this.configuration.description) {
      form.appendChild(createDescription(this.configuration.description));
    }

    this.configuration.items.forEach((item) => {
      const fieldContainer = make('div', classes.containerField);

      if (item.label) {
        fieldContainer.appendChild(createLabel(item.label));
      }

      const currentField = mapperField(item.field.type)(item.field);

      fieldContainer.appendChild(currentField);

      form.appendChild(fieldContainer);
    });

    this.container.appendChild(form);

    return form;
  }
}
