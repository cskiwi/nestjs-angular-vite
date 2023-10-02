import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./app.component').then((m) => m.AppComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/index.page').then((m) => m.HomeComponent),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  bootstrap: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
})
export class AppModule {}
