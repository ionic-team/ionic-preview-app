import {Component} from '@angular/core';

@Component({
  templateUrl: './build/pages/selects/basic/template.html'
})
export class BasicPage {
  gaming: string = "n64";
  gender: string = "f";
  musicAlertOpts: { title: string, subTitle: string };

  constructor() {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }
}
