import { Component } from '@angular/core';


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
export class TabBadgesContent { }

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="call" [root]="rootPage" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
      <ion-tab tabIcon="chatbubbles" [root]="rootPage" tabBadge="14" tabBadgeStyle="danger"></ion-tab>
      <ion-tab tabIcon="musical-notes" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class BadgesPage {
  rootPage = TabBadgesContent;
}
