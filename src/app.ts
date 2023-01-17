import { Form } from './form';
import { Notion } from './service/notion';
import { NotionConfig } from './service/notion/config';
import { FormConfig } from './types/form';
import { CollapsedFormConfig } from './types/collapsedForm';

window.feedback = {
  load: (configuration: NotionConfig) => {
    return new Notion(configuration);
  },
  createForm: (
    configuration: {
      form: FormConfig;
      collapsedForm: CollapsedFormConfig;
    },
    sumbitEvent?: (data: Record<string, FormDataEntryValue>) => void
  ) => {
    new Form(configuration, sumbitEvent);
  },
};
