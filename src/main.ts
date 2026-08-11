/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { registerAxiosAuth } from './app/auth/axios-auth';

// Must run before any service issues a request.
registerAxiosAuth();

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

