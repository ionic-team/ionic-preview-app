import {Page, Platform} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/toolbar/buttons/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class ToolbarButtonsPage {

  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }

  onPageWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }

  onPageWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }
}
