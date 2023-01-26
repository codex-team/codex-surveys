import { make } from './make';
import { Select, Field, TypeField, Textarea } from '../types/form';
import { IconChevronDown, IconCross } from '@codexteam/icons';
import classes from '../styles/form.module.css';

/**
 * Helper for creating Label
 *
 * @param {string} [label] - text in Label
 * @returns {HTMLElement}
 */
export function createLabel(label: string): HTMLElement {
  return make('label', classes.label, {
    textContent: label,
  });
}

/**
 * Helper for creating form description
 *
 * @param {string} [textContent] - text for description
 * @returns {HTMLElement}
 */
export function createDescription(textContent: string): HTMLElement {
  return make('p', classes.description, {
    textContent,
  });
}

/**
 * Helper for creating Submit button
 */
export function createSubmit(): HTMLElement {
  const fieldContainer = make('div', classes.containerField);

  fieldContainer.appendChild(
    make('button', classes.submit, {
      textContent: 'Submit',
      type: 'submit',
    })
  );

  return fieldContainer;
}

/**
 * Helper for adding icon to background
 *
 * @param {HTMLElement} container - container for adding background
 * @param {string} icon - added icon
 */
function addBackgroundIcon(container: HTMLElement, icon: string): void {
  container.style.backgroundImage = `url(data:image/svg+xml;utf8,${encodeURI(
    icon
  )})`;
}

/**
 * Helper for creating close button
 * 
 * @returns {HTMLButtonElement}
 */
export function createClose(): HTMLButtonElement {
  const closeContainer = make('button', classes.close) as HTMLButtonElement;

  addBackgroundIcon(closeContainer, IconCross);

  return closeContainer;
}

/**
 * Helper for creating Select
 *
 * @param {Select} [select] - user settings for select
 * @returns {HTMLSelectElement}
 */
function createSelect(select: Select): HTMLSelectElement {
  const selectContainer = make('select', classes.select, {
    name: select.name,
  }) as HTMLSelectElement;

  addBackgroundIcon(selectContainer, IconChevronDown);

  select.options.forEach((item) => {
    const option = make('option', classes.option) as HTMLOptionElement;

    option.value = item;
    option.text = item;
    selectContainer.add(option);
  });

  return selectContainer;
}

/**
 * Helper for creating Textarea
 *
 * @param {Textarea} [textarea] - user settings for textarea
 * @returns {HTMLElement}
 */
function createTextarea(textarea: Textarea): HTMLElement {
  const textareaContainer = make('textarea', classes.textarea, {
    placeholder: textarea.placeholder || '',
    name: textarea.name,
  });

  return textareaContainer;
}

/**
 * Factory for creating field by type
 *
 * @param {Field} [field] - field from configuration
 * @returns {HTMLElement | HTMLSelectElement}
 */
export function buildField(field: Field): HTMLSelectElement | HTMLElement {
  switch (field.type) {
    case TypeField.Select:
      return createSelect(field);
    case TypeField.Textarea:
      return createTextarea(field);
  }
}
