import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  templateUrl: 'template.html'
})
export class SegmentPage {
  isAndroid: boolean = false;
  selectedSegment: string = 'hot';

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
