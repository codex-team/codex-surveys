import { make } from './utils/make';
import {
  createLabel,
  createDescription,
  createSubmit,
  buildField,
} from './utils/createField';
import { IconCross } from '@codexteam/icons';
import classes from './styles/form.module.css';
import { FormConfig } from './types/form';
import { WidgetConfig } from './types/widget';

/**
 * Class for creating Feedback form
 */
export class Form {
  /**
   * Form container
   */
  private form: HTMLFormElement;

  /**
   * Widget container
   */
  private container: HTMLElement;

  /**
   * Configuration for collapsed form view
   */
  private widgetConfiguration: WidgetConfig;

  /**
   * Configuration for form view
   */
  private fullFormConfiguration: FormConfig;

  /**
   * Create container for form
   *
   * @param configuration - Form configuration
   * @param onSubmitEvent - Form action on sumbit
   */
  constructor(
    configuration: { form: FormConfig; widget: WidgetConfig },
    onSubmitEvent?: (data: Record<string, FormDataEntryValue>) => void
  ) {
    this.fullFormConfiguration = configuration.form;
    this.widgetConfiguration = configuration.widget;
    this.container = make('div', classes.container);
    this.form = this.createOpenForm(onSubmitEvent);
    this.createMinimizedForm();
  }

  /**
   * Collapse widget
   */
  private collapseWidget(): void {
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

    if (this.widgetConfiguration.title) {
      const titleContainer = make('span', classes.title, {
        textContent: this.widgetConfiguration.title,
      });

      formCollapsed.appendChild(titleContainer);
    }

    if (this.widgetConfiguration.description) {
      const descriptionContainer = make('span', classes.subtitle, {
        textContent: this.widgetConfiguration.description,
      });

      formCollapsed.appendChild(descriptionContainer);
    }

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
   * Create close button
   *
   * @returns {HTMLButtonElement}
   */
  private createClose(): HTMLButtonElement {
    const closeContainer = make('button', classes.close) as HTMLButtonElement;

    closeContainer.innerHTML = IconCross;

    closeContainer.addEventListener('click', () => {
      this.collapseWidget();
    });

    return closeContainer;
  }

  /**
   * Create and add form to document
   *
   * @param onSubmitEvent - Submit event for sending data
   */
  private createOpenForm(
    onSubmitEvent?: (e: Record<string, FormDataEntryValue>) => void
  ): HTMLFormElement {
    const form = make('form', classes.form) as HTMLFormElement;

    form.appendChild(this.createClose());

    if (this.fullFormConfiguration.description) {
      form.appendChild(
        createDescription(this.fullFormConfiguration.description)
      );
    }

    this.fullFormConfiguration.items.forEach((item) => {
      const fieldContainer = make('div', classes.containerField);

      if (item.label) {
        fieldContainer.appendChild(createLabel(item.label));
      }

      const currentField = buildField(item.field);

      fieldContainer.appendChild(currentField);

      form.appendChild(fieldContainer);
    });

    form.appendChild(createSubmit());

    this.container.appendChild(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (onSubmitEvent) {
        const data = Object.fromEntries(
          new FormData(this.form || undefined).entries()
        );

        onSubmitEvent(data);
      }

      this.collapseWidget();
    });

    return form;
  }
}
