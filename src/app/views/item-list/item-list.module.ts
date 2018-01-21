import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { NewItemComponent } from './../new-item/new-item.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [CommonModule, ItemListRoutingModule, SharedModule, MomentModule],
  declarations: [ItemListComponent, NewItemComponent],
  providers: []
})
export class ItemListModule { }
