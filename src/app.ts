import { Form } from './form';
import { Notion } from './service/notion';
import { Configuration } from './types/configuration';

/**
 * Class for creating widget on the document
 */
export class CodeXSurveys {
  /**
   * Class for connection to Notion
   */
  private notion: Notion;

  /**
   * Create notion connection and form
   *
   * @param {Configuration} configuration - Configuration for widget
   */
  constructor(configuration: Configuration) {
    this.notion = new Notion(configuration.notion);
    this.createForm(configuration);
  }

  /**
   * Creating form on the document
   *
   * @param {Configuration} configuration - Configuration for widget
   */
  private createForm(configuration: Configuration): void {
    new Form(
      {
        form: configuration.form,
        widget: configuration.widget,
      },
      (data: Record<string, FormDataEntryValue>) => {
        this.notion.send(data);
      }
    );
  }
}
