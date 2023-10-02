import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { config } from './app/app.config.server';

if (import.meta.env.PROD) {
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppModule, config);

export default async function render(url: string, document: string) {
  const html = await renderApplication(bootstrap, {
    document,
    url,
  });
  return html;
}
