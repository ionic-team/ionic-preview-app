import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';


@Component({
  templateUrl: './build/pages/alerts/confirm/template.html'
})
export class ConfirmPage {

  constructor(public nav: NavController) { }

  doConfirm() {
    let confirm = Alert.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
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
