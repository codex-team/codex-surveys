export enum TypeField {
  Select = 'select',
  Textarea = 'textarea',
  Submit = 'submit',
}

export type Submit = {
  type: TypeField.Submit;
  textContent?: string;
};

export type Select = {
  type: TypeField.Select;
  name: string;
  options: Array<{
    name: string;
    value: string;
  }>;
};

export type Textarea = {
  type: TypeField.Textarea;
  name: string;
  placeholder?: string;
};

export type FieldType = Select | Textarea | Submit;

export type FormConfig = {
  description?: string;
  items: Array<{
    field: FieldType;
    label?: string;
  }>;
};
