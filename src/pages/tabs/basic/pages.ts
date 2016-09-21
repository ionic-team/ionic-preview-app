import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
class TabTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Music" [root]="tabOne"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="tabTwo"></ion-tab>
      <ion-tab tabTitle="Games" [root]="tabThree"></ion-tab>
    </ion-tabs>
`})
export class BasicPage {
  tabOne = TabTextPage;
  tabTwo = TabTextPage;
  tabThree = TabTextPage;
}
