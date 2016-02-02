import {App, IonicApp, Platform, ActionSheet} from 'ionic-framework/ionic';
import {Page, Config, Events} from 'ionic-framework/ionic';
import {PageOne, PageTwo, PageThree} from './pages/menus/menus';
import * as helpers from './directives/helpers';

// Change the import if you want to change the first page, for example:
// import { ImagePage as rootPage } from './pages/cards/cards';
import { BasicPage as rootPage } from './pages/action-sheets/action-sheets';

@App({
  templateUrl: './build/app.html',
  config: {
    production: false,
    platforms: {
      android: {
        activator: 'ripple',
        backButtonIcon: 'md-arrow-back'
      }
    }
  }
})
class DemoApp {

  rootPage: any;
  androidAttribute: any;
  nextPage;
  isProductionMode;
  currentPageIndex;
  pages = [
    { title: 'Home', component: PageOne },
    { title: 'Friends', component: PageTwo },
    { title: 'Events', component: PageThree }
  ];
  constructor(
    public app: IonicApp,
    public platform: Platform,
    public config: Config) {
    this.androidAttribute = helpers.AndroidAttribute;


    this.platform.ready().then(() => {

      window.addEventListener('message', (e) => {
        zone.run(() => {
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
                this.app.getComponent('leftMenu').enable(false);
              }
            } else {
              this.nextPage = rootPage;
            }
            setTimeout(() => {
              let nav = this.app.getComponent('nav');
              helpers.debounce(nav.setRoot(this.nextPage), 60, false);
            });
          }
        });
      });

      if (this.config.get('production') === true) {
        this.isProductionMode = true;
        window.parent.postMessage(this.platform.is('ios') ? "ios" : "android", "*");
        if (helpers.hasScrollbar() === true) {
          setTimeout(function() {
            var body = document.getElementsByTagName('body')[0];
            body.className = body.className + ' has-scrollbar';
          }, 500);
        }
      } else {
        this.isProductionMode = false;
        this.currentPageIndex = 1;
        let nav = this.app.getComponent('nav');
        nav.setRoot(rootPage);
      }

    });

  }

  previousSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex - 1];
    let nav = this.app.getComponent('nav');
    nav.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex - 1;
  }

  nextSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex + 1];
    let nav = this.app.getComponent('nav');
    nav.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex + 1;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // debugger;
    this.app.getComponent('leftMenu').close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }

}
