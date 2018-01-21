import { InjectionToken } from '@angular/core';
import { Config } from './config';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: Config = {
  routes:
  {
    items: 'items',
    createItem: 'new'
  }
};
