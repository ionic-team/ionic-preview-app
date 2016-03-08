import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';

import * as helpers from '../../../directives/helpers';


@Page({
  template: '' +
  '<ion-navbar *navbar hideBackButton [attr.danger]="isAndroid ? \'\' : null">' +
    '<ion-title>Tabs</ion-title>' +
  '</ion-navbar>' +
  '<ion-content>' +
  '</ion-content>',
,
})
class TabIconPage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    document.getElementById('md-tabs-icon').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }
}

@Page({
  template:
  '<ion-tabs class="tabs-icon">' +
    '<ion-tab tabIcon="contact" [root]="tabOne"></ion-tab>' +
    '<ion-tab tabIcon="compass" [root]="tabTwo"></ion-tab>' +
    '<ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>' +
    '<ion-tab tabIcon="settings" [root]="tabFour"></ion-tab>' +
  '</ion-tabs>',
})
export class IconPage {
  constructor() {
    this.tabOne = TabIconPage;
    this.tabTwo = TabIconPage;
    this.tabThree = TabIconPage;
    this.tabFour = TabIconPage;
  }

  onPageWillLeave() {
    document.getElementById('md-tabs-icon').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}
