import {Page, Alert, NavController} from 'ionic-framework/ionic';
import {AndroidAttribute} from '../../helpers';
import {forwardRef} from 'angular2/core';


@Page({
  templateUrl: './build/alerts/basic/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class BasicPage {

  constructor(nav: NavController) {
    this.nav = nav;
  }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }

}
