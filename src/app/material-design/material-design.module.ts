
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    
  	MatSidenavModule,
  	MatToolbarModule
  ],
  exports: [
    
  	MatSidenavModule,
  	MatToolbarModule
  ]
})
export class MaterialDesignModule { }
