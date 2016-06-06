import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';


@Component({
  template:
  '<ion-navbar *navbar hideBackButton [attr.danger]="isAndroid ? \'\' : null">' +
    '<ion-title>Tabs</ion-title>' +
  '</ion-navbar>' +
  '<ion-content>' +
  '</ion-content>'
})
class TabIconPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  ionViewWillEnter() {
    document.getElementById('md-tabs-icon').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }
}

@Component({
  template:
  '<ion-tabs class="tabs-icon" [attr.danger]="isAndroid ? \'\' : null">' +
    '<ion-tab tabIcon="contact" [root]="tabOne"></ion-tab>' +
    '<ion-tab tabIcon="compass" [root]="tabTwo"></ion-tab>' +
    '<ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>' +
    '<ion-tab tabIcon="settings" [root]="tabFour"></ion-tab>' +
  '</ion-tabs>',
})
export class IconPage {
  tabOne = TabIconPage;
  tabTwo = TabIconPage;
  tabThree = TabIconPage;
  tabFour = TabIconPage;
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }
}
