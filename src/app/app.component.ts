import { Component, NgZone, ViewChild } from '@angular/core';
import { Config, Menu, NavController, Platform } from 'ionic-angular';

import * as helpers from '../directives/helpers';
import { PageOne, PageTwo, PageThree } from '../pages/menus/basic/pages';
import { BasicPage } from '../pages/action-sheets/basic/pages';

@Component({
  templateUrl: 'app.template.html'
})
export class MyApp {
  isProductionMode: boolean = false;
  rootPage: any;
  nextPage: any;
  currentPlatform: string = 'ios';
  currentPageIndex: number = 1;

  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;

  pages = [
    { title: 'Home', component: PageOne },
    { title: 'Friends', component: PageTwo },
    { title: 'Events', component: PageThree }
  ];

  constructor(public platform: Platform, public config: Config, public zone: NgZone) {
    this.rootPage = BasicPage;
  }

  ngAfterContentInit() {
    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/

    if (this.platform.getQueryParam('production') === 'true') {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) {
        this.currentPlatform = 'android';
      } else if (this.platform.is('windows')) {
        this.currentPlatform = 'windows';
      }

      if (helpers.hasScrollbar() === true) {
        setTimeout(function () {
          var body = document.getElementsByTagName('body')[0];
          body.className = body.className + ' has-scrollbar';
        }, 500);
      }

      window.parent.postMessage(this.currentPlatform, '*');
      window.addEventListener('message', (e) => {
        this.zone.run(() => {
          if (e.data) {
            var data;
            try {
              data = JSON.parse(e.data);
            } catch (e) {
              console.error(e);
            }

            if (data.hash) {
              this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
              if (data.hash !== 'menus') {
                this.menu.enable(false);
              }
            } else {
              this.currentPageIndex = 1;
              this.nextPage = BasicPage;
            }
            setTimeout(() => {
              helpers.debounce(this.content.setRoot(this.nextPage), 60, false);
            });
          }
        });
      });
    }
  }

  previousSection() {
    let previousPage = this.currentPageIndex - 1;
    if (previousPage < 0) {
      previousPage = 0;
    }
    let pageName = Object.keys(helpers.getPages())[previousPage];
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = previousPage;
  }

  nextSection() {
    let nextPage = this.currentPageIndex + 1;
    const pageList = Object.keys(helpers.getPages());
    if (nextPage >= pageList.length) {
      nextPage = pageList.length - 1;
    }
    let pageName = pageList[nextPage];
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = nextPage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    helpers.debounce(this.content.setRoot(page.component), 60, false);
  }
}
