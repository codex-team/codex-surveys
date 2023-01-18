import { NotionConfig } from '../service/notion/config';
import { FormConfig } from './form';
import { CollapsedFormConfig } from './collapsedForm';

export type Configuration = {
  form: FormConfig;
  collapsedForm: CollapsedFormConfig;
  notion: NotionConfig;
};
