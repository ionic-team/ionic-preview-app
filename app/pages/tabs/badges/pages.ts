import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';
import {forwardRef} from 'angular2/core';


@Page({
  template: '' +
    '<ion-navbar *navbar hideBackButton [attr.primary]="isAndroid ? \'\' : null">' +
    '<ion-title>Tabs</ion-title>' +
    '</ion-navbar>' +
    '<ion-content>' +
    '</ion-content>',
})
class TabBadgePage {
  isAndroid: boolean = false;

  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Page({
  template:
    '<ion-tabs class="tabs-badges" [attr.primary]="isAndroid ? \'\' : null">' +
      '<ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>' +
    '</ion-tabs>',
})
export class BadgesPage {
  isAndroid: boolean = false;

  tabOne = TabBadgePage;
  tabTwo = TabBadgePage;
  tabThree = TabBadgePage;

  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
