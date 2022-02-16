import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxCircularGaugeModule } from 'devextreme-angular'

import { ReactiveRoutingModule } from './reactive-routing.module';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveRoutingModule,
    DxCircularGaugeModule
  ],
  exports: [
    FormsComponent,
    FormsModule,
    DxCircularGaugeModule
]
})
export class ReactiveModule { }
