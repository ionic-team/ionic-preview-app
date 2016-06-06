import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';


@Component({
  templateUrl: './build/pages/alerts/radio/template.html'
})
export class RadioPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public nav: NavController) { }

  doRadio() {
    let alert = Alert.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });
  }

}
