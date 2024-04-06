import { UI_CONFIGURATION_TOKEN } from '@cloud-cis/util';
import { uiConfiguration } from './ui-configuration';

export const uiConfigurationProvider = {
  provide: UI_CONFIGURATION_TOKEN,
  useValue: uiConfiguration,
  multi: false,
};
