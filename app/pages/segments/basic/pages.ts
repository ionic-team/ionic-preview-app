import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/segments/basic/template.html'
})
export class BasicPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
