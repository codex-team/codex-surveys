import { NotionConfig } from '../service/notion/config';
import { Notion } from '../service/notion';
import { FormConfig } from './form';
import { CollapsedFormConfig } from './collapsedForm';

declare global {
  interface Window {
    survey: {
      load: (configuration: NotionConfig) => Notion;
      createForm: (
        configuration: {
          form: FormConfig;
          collapsedForm: CollapsedFormConfig;
        },
        onSubmitEvent?: (data: Record<string, FormDataEntryValue>) => void
      ) => void;
    };
  }
}
