import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [attr.royal]="isAndroid ? '' : null">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
class TabIconTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}


@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [attr.royal]="isAndroid ? '' : null">
      <ion-tab tabIcon="water" tabTitle="Water" [root]="tabOne"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tabTwo"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tabThree"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tabFour"></ion-tab>
    </ion-tabs>
`})
export class IconTextPage {
  tabOne = TabIconTextPage;
  tabTwo = TabIconTextPage;
  tabThree = TabIconTextPage;
  tabFour = TabIconTextPage;
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
