import {Page, Platform} from 'ionic-angular';


@Page({
    templateUrl: './build/pages/toolbar/segment/template.html'
})
export class SegmentPage {
  isAndroid: boolean = false;
  selectedSegment: string = "hot";

  constructor(platform: Platform) {
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
