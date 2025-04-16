import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon"
import {MatAutocompleteModule} from '@angular/material/autocomplete'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers:[
  ],
  exports:[
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class MaterialsModule {

 }
