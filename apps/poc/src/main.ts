import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const configPath = 'configuration.local.json';

fetch(configPath)
  .then(res => res.json())
  .then(config => {
    bootstrapApplication(AppComponent, appConfig(config)).catch(err => console.error(err));
  });
