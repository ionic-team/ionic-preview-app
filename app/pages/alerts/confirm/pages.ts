import {Page, Alert, NavController} from 'ionic-angular';
import {AndroidAttribute} from '../../../directives/helpers';
import {forwardRef} from 'angular2/core';


@Page({
  templateUrl: './build/pages/alerts/confirm/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class ConfirmPage {

  constructor(nav: NavController) {
    this.nav = nav;
  }

  doConfirm() {
    let confirm = Alert.create({
      title: 'Use this lightsaber?',
      body: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    this.nav.present(confirm);
  }

}
