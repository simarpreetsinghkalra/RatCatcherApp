import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'RegisterDevicePage';
  tab3Root = 'DevicesPage';

  constructor() {

  }
}
