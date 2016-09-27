import { Component, NgZone, ViewChild } from '@angular/core';
import { Config, Menu, NavController, Platform, QueryParams } from 'ionic-angular';

import * as helpers from '../directives/helpers';
import { PageOne, PageTwo, PageThree } from '../pages/menus/menus';
import { BasicPage } from '../pages/action-sheets/action-sheets';

@Component({
  template: `
  <img src="assets/img/android-statusbar.png" style="display:none" id="md-only">
  <img src="assets/img/ios-statusbar.png" style="display:none" id="ios-only">
  <img src="assets/img/wp-statusbar.png" style="display:none" id="wp-only">

  <ion-menu [content]="content">

    <ion-toolbar color="primary">
      <ion-title>Menu</ion-title>
    </ion-toolbar>

    <ion-content>
      <!-- Display the side menu pages if it is production -->
      <ion-list *ngIf="isProductionMode">
        <button ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">
          {{p.title}}
        </button>

        <button ion-item menuClose detail-none>
          Close Menu
        </button>
      </ion-list>

      <!-- Display all of the sections if this isn't production -->
      <ion-list *ngIf="!isProductionMode">
        <button ion-item *ngFor="let route of routes" menuClose (click)="openPage(route)">
          {{ route.path | displayRoute }}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>

  <ion-nav [root]="rootPage" #content></ion-nav>

  <div *ngIf="!isProductionMode">

    <ion-fab left middle>
      <button ion-fab color="light" (click)="previousSection()">
        <ion-icon name="arrow-back"></ion-icon>
      </button>
    </ion-fab>

    <ion-fab right middle>
      <button ion-fab color="light" (click)="nextSection()">
        <ion-icon name="arrow-forward"></ion-icon>
      </button>
    </ion-fab>
  </div>
  `
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

  constructor(public platform: Platform, public config: Config, public zone: NgZone, public queryParams: QueryParams) {
    this.rootPage = BasicPage;
  }

  ngAfterContentInit() {
    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/

    if (this.queryParams.get('production') === 'true') {
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
