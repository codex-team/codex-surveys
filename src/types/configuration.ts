import { NotionConfig } from '../service/notion/config';
import { FormConfig } from './form';
import { WidgetConfig } from './widget';

export type Configuration = {
  form: FormConfig;
  widget: WidgetConfig;
  notion: NotionConfig;
};
