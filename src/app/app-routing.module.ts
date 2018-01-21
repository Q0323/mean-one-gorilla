import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from 'app/config';

const routes: Routes = [
  {
    path: `${AppConfig.routes.items}`,
    loadChildren: './views/item-list/item-list.module#ItemListModule'
  },
  {path: '', redirectTo: `/${AppConfig.routes.items}`, pathMatch: 'full' },
  {path: '**', redirectTo: `/${AppConfig.routes.items}` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
