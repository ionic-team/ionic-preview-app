import {Page, Alert, NavController} from 'ionic-framework/ionic';
import {AndroidAttribute} from '../../../directives/helpers';
import {forwardRef} from 'angular2/core';


@Page({
  templateUrl: './build/pages/alerts/basic/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class BasicPage {
nav: NavController;
  constructor(nav: NavController) {
    this.nav = nav;
  }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      body: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }
}
