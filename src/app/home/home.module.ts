import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StaffDropdownlistComponent } from './staff-dropdownlist/staff-dropdownlist.component';

import { DropDownListModule } from './../modules/dropdownlist.module';

@NgModule({
  imports: [
    CommonModule,
    DropDownListModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    StaffDropdownlistComponent
  ]
})
export class HomeModule { }
