import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule
];

@NgModule({
  imports: [CommonModule, MODULES],
  exports: [MODULES],
  declarations: [],
})
export class MaterialModule {}
