import { NotionConfig } from '../service/notion/config';
import { FormConfig } from './form';
import { WidgetConfig } from './widget';

/**
 * Common configuration for initialization
 */
export type Configuration = {
  /**
   * Configuration for full size form
   */
  form: FormConfig;
  /**
   * Configuration for collapsed form
   */
  widget: WidgetConfig;
  /**
   * Notion client configuration
   */
  notion: NotionConfig;
};
