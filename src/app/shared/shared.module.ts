import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';

const components = [
  HeaderComponent
];

const modules = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  RouterModule
];

@NgModule({
  imports: [
    modules
  ],
  declarations: [components],
  exports: [components, modules]
})
export class SharedModule { }
