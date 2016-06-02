import {Component, NgZone, ViewChild, AfterContentInit} from '@angular/core';
import {App, ionicBootstrap, Platform, ActionSheet, MenuController, NavController, Menu} from 'ionic-angular';
import {Config, Events} from 'ionic-angular';
import {PageOne, PageTwo, PageThree} from './pages/menus/menus';
import {DisplayRoutePipe} from './pipes/display-route';
import * as helpers from './directives/helpers';

// Change the import if you want to change the first page, for example:
// import { ImagePage as ActionPage } from './pages/cards/cards';
import { BasicPage as ActionPage} from './pages/action-sheets/action-sheets';

@Component({
  templateUrl: './build/app.html',
  pipes: [DisplayRoutePipe]
})
class DemoApp {
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

  constructor(
    private platform: Platform,
    private config: Config,
    private zone: NgZone) {
    this.rootPage = ActionPage;

  }

  ngAfterContentInit() {
    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/

    if (this.platform.query('production') === 'true') {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) {
        this.currentPlatform = 'android';
      } else if (this.platform.is('windows')) {
        this.currentPlatform = 'windows';
      }

      if (helpers.hasScrollbar() === true) {
        setTimeout(function() {
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
              console.log('has')
              this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
              if (data.hash !== 'menus') {
                this.menu.enable(false);
              }
            } else {
              console.log('heere')
              this.currentPageIndex = 1;
              this.nextPage = ActionPage;
            }
            setTimeout(() => {
              helpers.debounce(this.content.setRoot(this.nextPage), 60, false);
            })
          }
        });
      });
    }

  }

  previousSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex - 1];
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex - 1;
  }

  nextSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex + 1];
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex + 1;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // this.menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    helpers.debounce(this.content.setRoot(page.component), 60, false);
  }

}

ionicBootstrap(DemoApp, [], {
  statusbarPadding: true,
  platforms: {
    android: {
      activator: 'ripple',
      backButtonIcon: 'md-arrow-back'
    }
  }
});
