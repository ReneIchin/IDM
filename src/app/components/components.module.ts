import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarVerticalComponent } from './navbar/navbar-vertical/navbar-vertical.component';
import { SettingPanelComponent } from './common/setting-panel/setting-panel.component';
import { MainContentComponent } from './pages/main-content/main-content.component';

@NgModule({
  declarations: [
    NavbarVerticalComponent,
    SettingPanelComponent,
    MainContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarVerticalComponent,
    SettingPanelComponent,
    MainContentComponent,
  ],
})
export class ComponentsModule {}
