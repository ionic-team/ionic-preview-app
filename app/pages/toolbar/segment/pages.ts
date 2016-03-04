import {Page, Platform} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/toolbar/segment/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class ToolbarSegmentPage {

  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }

  onPageWillEnter() {
    document.getElementById('md-tabs-icon').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }

  onPageWillLeave() {
    document.getElementById('md-tabs-icon').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}
