import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';

bootstrapApplication(AppModule, appConfig).catch((err) => console.error(err));
