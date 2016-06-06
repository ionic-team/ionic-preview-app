import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/segments/basic/template.html'
})
export class BasicPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
