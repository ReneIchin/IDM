import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, LayoutsRoutingModule, ComponentsModule],
  exports: [MainLayoutComponent],
})
export class LayoutsModule {}
