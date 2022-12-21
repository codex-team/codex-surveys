/**
 * All existing type of field
 */
export enum TypeField {
  Select = 'select',
  Textarea = 'textarea',
  Submit = 'submit',
}

/**
 * Type for submit button
 */
export type Submit = {
  type: TypeField.Submit;
  /**
   * Text in button
   */
  textContent?: string;
};

/**
 * Type for selection
 */
export type Select = {
  type: TypeField.Select;
  /**
   * Name for form/name of database column
   */
  name: string;
  /**
   * Options in select
   */
  options: Array<{
    name: string;
    value: string;
  }>;
};

/**
 * Type for textarea
 */
export type Textarea = {
  type: TypeField.Textarea;
  /**
   * Name for form/name of database column
   */
  name: string;
  /**
   * Placeholder for textarea
   */
  placeholder?: string;
};

export type Field = Select | Textarea | Submit;

export type FormConfig = {
  /**
   * Description of feedback
   */
  description?: string;
  /**
   * Fields in Form
   */
  items: Array<{
    field: Field;
    /**
     * Label of field
     */
    label?: string;
  }>;
};
