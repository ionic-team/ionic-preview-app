import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';


@Component({
  template:
  '<ion-navbar *navbar hideBackButton [attr.royal]="isAndroid ? \'\' : null">' +
    '<ion-title>Tabs</ion-title>' +
  '</ion-navbar>' +
  '<ion-content>' +
  '</ion-content>'
})
class TabIconTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  ionViewWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }
}


@Component({
  template:
  '<ion-tabs class="tabs-icon-text">' +
  '<ion-tab tabIcon="water" tabTitle="Water" [root]="tabOne"></ion-tab>' +
  '<ion-tab tabIcon="leaf" tabTitle="Life" [root]="tabTwo"></ion-tab>' +
  '<ion-tab tabIcon="flame" tabTitle="Fire" [root]="tabThree"></ion-tab>' +
  '<ion-tab tabIcon="magnet" tabTitle="Force" [root]="tabFour"></ion-tab>' +
  '</ion-tabs>',
})
export class IconTextPage {
  tabOne = TabIconTextPage;
  tabTwo = TabIconTextPage;
  tabThree = TabIconTextPage;
  tabFour = TabIconTextPage;

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}
