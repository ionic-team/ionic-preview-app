import {Page, NavController} from 'ionic-angular';

@Page({
  template: `
      <ion-navbar *navbar dark>
      <ion-title>Dark</ion-title>
      </ion-navbar>
      <ion-content>
      </ion-content>
  `
})
export class Page4 {
  constructor(
    public nav: NavController
  ) { }
}


@Page({
  template: `
      <ion-navbar *navbar danger>
      <ion-title>Danger</ion-title>
      </ion-navbar>

      <ion-content>
      <button block (click)="pushPage()">Go to new page</button>
      </ion-content>
  `
})
export class Page3 {
  constructor(
    public nav: NavController
  ) { }

  pushPage() {
    this.nav.push(Page4);
  }
}


@Page({
  template: `
      <ion-navbar *navbar secondary>
      <ion-title>Secondary</ion-title>
      </ion-navbar>

      <ion-content>
      <button block (click)="pushPage()">Go to new page</button>
      </ion-content>
  `
})
export class Page2 {
  constructor(
    public nav: NavController
  ) { }

  pushPage() {
    this.nav.push(Page3);
  }

}


@Page({
  template: `
      <ion-navbar *navbar primary>
      <ion-title>Primary</ion-title>
      </ion-navbar>

      <ion-content>
      <button block (click)="pushPage()">Go to new page</button>
      </ion-content>
  `
})
export class ColorsPage {
  constructor(
    public nav: NavController
  ) { }

  pushPage() {
    this.nav.push(Page2);
  }

}
