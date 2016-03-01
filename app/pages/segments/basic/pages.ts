import {Page, Platform} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/segments/basic/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class SegmentPage{
  constructor(platform: Platform) {
    this.platform = platform;
    this.pet = "puppies";
    this.isAndroid = platform.is('android');
  }

}
