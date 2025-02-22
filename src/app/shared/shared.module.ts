import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DrawerModule,
    RadioButtonModule,
    SliderModule,
    PaginatorModule,
    SelectModule,
    InputTextModule,
    HttpClientModule,
    SplitButtonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    DatePickerModule,
  ],
  exports: [
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DrawerModule,
    RadioButtonModule,
    SliderModule,
    PaginatorModule,
    SelectModule,
    InputTextModule,
    HttpClientModule,
    SplitButtonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    DatePickerModule,
  ]
})
export class SharedModule { }
