import {Page, Alert, NavController} from 'ionic-angular';
import {AndroidAttribute} from '../../../directives/helpers';
import {forwardRef} from 'angular2/core';


@Page({
  templateUrl: './build/pages/alerts/checkbox/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class CheckboxPage {

  constructor(nav: NavController) {
    this.nav = nav;
  }

  doCheckbox() {
      let alert = Alert.create();
      alert.setTitle('Which planets have you visited?');

      alert.addInput({
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
          checked: true
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Coruscant',
          value: 'value3'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Endor',
          value: 'value4'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Hoth',
          value: 'value5'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Jakku',
          value: 'value6'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Naboo',
          value: 'value6'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Takodana',
          value: 'value6'
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Tatooine',
          value: 'value6'
      });

      alert.addButton('Cancel');
      alert.addButton({
          text: 'Okay',
          handler: data => {
              console.log('Checkbox data:', data);
              this.testCheckboxOpen = false;
              this.testCheckboxResult = data;
          }
      });

      this.nav.present(alert).then(() => {
        this.testCheckOpen = true;
      });

}
