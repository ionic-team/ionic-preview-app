import {NavController, NavParams} from 'ionic-framework/ionic';
import {Page, ViewController, Platform} from 'ionic-framework/ionic';
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
class TabBadgePage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
}

@Page({
  template: 
    '<ion-tabs class="tabs-badges">' +
      '<ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>' +
    '</ion-tabs>',
})
export class BadgesPage {
  constructor() {
    this.tabOne = TabBadgePage;
    this.tabTwo = TabBadgePage;
    this.tabThree = TabBadgePage;
  }
}
