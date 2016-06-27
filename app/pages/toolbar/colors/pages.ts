import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar light>
        <ion-title>Toolbar: Light</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button block (click)="goBack()">Go Back to Beginning</button>
    </ion-content>
  `
})
export class Page4 {
  constructor(public nav: NavController) {

  }

  goBack() {
    this.nav.setRoot(ColorsPage);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar danger>
        <ion-title>Toolbar: Danger</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page3 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page4);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar secondary>
        <ion-title>Toolbar: Secondary</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page2 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page3);
  }

}


@Component({
  template: `
    <ion-header>
      <ion-navbar primary>
        <ion-title>Toolbar: Primary</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class ColorsPage {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page2);
  }

}
