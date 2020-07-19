import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { GlobalModuleComponent } from 'global-module';



@NgModule({
  declarations: [HomeComponent, GlobalModuleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [ComponentsModule, HomeComponent, GlobalModuleComponent]
})
export class PagesModule { }
