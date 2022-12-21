import { make } from './make';
import { Select, TypeField, Textarea, Submit } from '../types/form';
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
 *
 * @param {Submit} [submit] - settings for button
 * @returns {HTMLElement}
 */
function createSubmit(submit: Submit): HTMLElement {
  return make('button', classes.submit, {
    textContent: submit.textContent || 'Submit',
    type: 'submit',
  });
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

  select.options.forEach((item) => {
    const option = make('option', classes.option) as HTMLOptionElement;

    option.value = item.value;
    option.text = item.name;
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
 * @param {TypeField} [type] - type of field
 */
export function mapperField(
  type: TypeField
):
  | ((select: Select) => HTMLSelectElement)
  | ((textarea: Textarea) => HTMLElement)
  | ((submit: Submit) => HTMLElement) {
  return {
    [TypeField.select]: createSelect,
    [TypeField.textarea]: createTextarea,
    [TypeField.submit]: createSubmit,
  }[type];
}
