import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../../directives/helpers';


@Page({
  template: '' +
    '<ion-navbar *navbar hideBackButton [attr.primary]="isAndroid ? \'\' : null">' +
    '<ion-title>Tabs</ion-title>' +
    '</ion-navbar>' +
    '<ion-content>' +
    '</ion-content>',
  directives: [forwardRef(() => helpers.AndroidAttribute)],
})
class TabTextPage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
}

@Page({
  template: 
    '<ion-tabs class="tabs-basic">' +
      '<ion-tab tabTitle="Music" [root]="tabOne"></ion-tab>' +
      '<ion-tab tabTitle="Movies" [root]="tabTwo"></ion-tab>' +
      '<ion-tab tabTitle="Games" [root]="tabThree"></ion-tab>' +
    '</ion-tabs>',
})
export class BasicPage {
  constructor() {
    this.tabOne = TabTextPage;
    this.tabTwo = TabTextPage;
    this.tabThree = TabTextPage;
  }
}
