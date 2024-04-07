import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const configPath = 'configuration.local.json';

bootstrapApplication(AppComponent).catch(err => console.error(err));
// fetch(configPath)
// .then(res => res.json())
// .then(config => {
//   });
