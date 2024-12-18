import { Component, OnInit } from '@angular/core';
declare var themeControl: any;

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.scss'],
})
export class SettingPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    themeControl();
  }
}
