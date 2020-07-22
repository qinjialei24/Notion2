import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuNavigatorComponent } from './bu-navigator/bu-navigator.component';



@NgModule({
  declarations: [BuNavigatorComponent],
  imports: [
    CommonModule
  ],
  exports: [BuNavigatorComponent]
})
export class BusinessComponentsModule { }
