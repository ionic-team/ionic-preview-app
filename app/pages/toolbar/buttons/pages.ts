import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
    templateUrl: './build/pages/toolbar/buttons/template.html'
})
export class ButtonsPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }
}
