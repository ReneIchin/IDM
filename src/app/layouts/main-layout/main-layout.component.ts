import { Component, OnInit } from '@angular/core';
declare var scrollbarInit: any;
declare var tooltipInit: any;
declare var handleNavbarVerticalCollapsed: any;
declare var themeControl: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    scrollbarInit();
    tooltipInit();
    handleNavbarVerticalCollapsed();
    themeControl();
    var isFluid = JSON.parse(localStorage.getItem('isFluid') || '');
    if (isFluid) {
      var container = document.querySelector('[data-layout]');
      container?.classList.remove('container');
      container?.classList.add('container-fluid');
    }
  }
}
