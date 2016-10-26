import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
export class TabIconTextContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}


@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
      <ion-tab tabIcon="water" tabTitle="Water" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class IconTextPage {
  rootPage = TabIconTextContentPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
