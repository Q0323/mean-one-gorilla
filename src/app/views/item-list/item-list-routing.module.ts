import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from '../../config';
import { ItemListComponent } from './item-list.component';
import { NewItemComponent } from './../new-item/new-item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
  },
  {
    path: `${AppConfig.routes.createItem}`,
    component: NewItemComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
