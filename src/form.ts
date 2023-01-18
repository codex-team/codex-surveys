import { make } from './utils/make';
import {
  createLabel,
  createDescription,
  createSubmit,
  buildField
} from './utils/createField';
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
  private collapsedFormConfiguration: WidgetConfig;

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
    configuration: { form: FormConfig; collapsedForm: WidgetConfig },
    onSubmitEvent?: (data: Record<string, FormDataEntryValue>) => void
  ) {
    this.fullFormConfiguration = configuration.form;
    this.collapsedFormConfiguration = configuration.collapsedForm;
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

    if (this.collapsedFormConfiguration.title) {
      const titleContainer = make('span', classes.title, {
        textContent: this.collapsedFormConfiguration.title,
      });

      formCollapsed.appendChild(titleContainer);
    }

    if (this.collapsedFormConfiguration.description) {
      const descriptionContainer = make('span', classes.description, {
        textContent: this.collapsedFormConfiguration.description,
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
   * Create and add form to document
   *
   * @param onSubmitEvent - Submit event for sending data
   */
  private createOpenForm(
    onSubmitEvent?: (e: Record<string, FormDataEntryValue>) => void
  ): HTMLFormElement {
    const form = make('form', classes.form) as HTMLFormElement;

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
