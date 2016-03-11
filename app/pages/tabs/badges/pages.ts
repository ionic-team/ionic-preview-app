import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';


@Page({
  template: '' +
    '<ion-navbar *navbar hideBackButton>' +
      '<ion-title>Tabs</ion-title>' +
    '</ion-navbar>' +
    '<ion-content>' +
    '</ion-content>'
})
class TabBadgePage { }

@Page({
  template:
    '<ion-tabs>' +
      '<ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>' +
      '<ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>' +
    '</ion-tabs>',
})
export class BadgesPage {
  tabOne = TabBadgePage;
  tabTwo = TabBadgePage;
  tabThree = TabBadgePage;
}
