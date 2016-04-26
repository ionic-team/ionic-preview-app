import {NgZone} from 'angular2/core';
import {RouteConfig, Location} from 'angular2/router';
import {App, IonicApp, Platform, ActionSheet, MenuController} from 'ionic-angular';
import {Page, Config, Events} from 'ionic-angular';
import {PageOne, PageTwo, PageThree} from './pages/menus/menus';
import {DisplayRoutePipe} from './pipes/display-route';
import * as helpers from './directives/helpers';

// Change the import if you want to change the first page, for example:
// import { ImagePage as rootPage } from './pages/cards/cards';
import { BasicPage as rootPage } from './pages/action-sheets/action-sheets';


// Import all of the pages in order to add them to the RouteConfig
import * as actionSheets from './pages/action-sheets/action-sheets';
import * as alerts from './pages/alerts/alerts';
import * as badges from './pages/badges/badges';
import * as buttons from './pages/buttons/buttons';
import * as cards from './pages/cards/cards';
import * as checkboxes from './pages/checkboxes/checkboxes';
import * as gestures from './pages/gestures/gestures';
import * as grid from './pages/grid/grid';
import * as icons from './pages/icons/icons';
import * as inputs from './pages/inputs/inputs';
import * as lists from './pages/lists/lists';
import * as loading from './pages/loading/loading';
import * as menus from './pages/menus/menus';
import * as modals from './pages/modals/modals';
import * as navigation from './pages/navigation/navigation';
import * as radios from './pages/radios/radios';
import * as ranges from './pages/ranges/ranges';
import * as searchbars from './pages/searchbars/searchbars';
import * as segments from './pages/segments/segments';
import * as selects from './pages/selects/selects';
import * as slides from './pages/slides/slides';
import * as tabs from './pages/tabs/tabs';
import * as toast from './pages/toast/toast';
import * as toggles from './pages/toggles/toggles';
import * as toolbar from './pages/toolbar/toolbar';

const ROUTES = [
  { path: '/action-sheets/basic', component: actionSheets.BasicPage, useAsDefault: true },

  { path: '/alerts/basic', component: alerts.BasicPage },
  { path: '/alerts/checkbox', component: alerts.CheckboxPage },
  { path: '/alerts/confirm', component: alerts.ConfirmPage },
  { path: '/alerts/prompt', component: alerts.PromptPage },
  { path: '/alerts/radio', component: alerts.RadioPage },

  { path: '/badges/basic', component: badges.BasicPage },

  { path: '/buttons/basic', component: buttons.BasicPage },
  { path: '/buttons/block', component: buttons.BlockPage },
  { path: '/buttons/clear', component: buttons.ClearPage },
  { path: '/buttons/components', component: buttons.ComponentsPage },
  { path: '/buttons/fab', component: buttons.FabPage },
  { path: '/buttons/full', component: buttons.FullPage },
  { path: '/buttons/icons', component: buttons.IconsPage },
  { path: '/buttons/outline', component: buttons.OutlinePage },
  { path: '/buttons/round', component: buttons.RoundPage },
  { path: '/buttons/sizes', component: buttons.SizesPage },

  { path: '/cards/advanced-map', component: cards.AdvancedMapPage },
  { path: '/cards/advanced-social', component: cards.AdvancedSocialPage },
  { path: '/cards/advanced-weather', component: cards.AdvancedWeatherPage },
  { path: '/cards/background', component: cards.BackgroundPage },
  { path: '/cards/basic', component: cards.BasicPage },
  { path: '/cards/header', component: cards.HeaderPage },
  { path: '/cards/image', component: cards.ImagePage },
  { path: '/cards/list', component: cards.ListPage },

  { path: '/checkboxes/basic', component: checkboxes.BasicPage },

  { path: '/gestures/basic', component: gestures.BasicPage },

  { path: '/grid/basic', component: grid.BasicPage },

  { path: '/icons/basic', component: icons.BasicPage },

  { path: '/inputs/basic', component: inputs.BasicPage },
  { path: '/inputs/fixed-inline', component: inputs.FixedInlinePage },
  { path: '/inputs/floating', component: inputs.FloatingPage },
  { path: '/inputs/inline', component: inputs.InlinePage },
  { path: '/inputs/inset', component: inputs.InsetPage },
  { path: '/inputs/placeholder', component: inputs.PlaceholderPage },
  { path: '/inputs/stacked', component: inputs.StackedPage },

  { path: '/lists/avatar', component: lists.AvatarPage },
  { path: '/lists/basic', component: lists.BasicPage },
  { path: '/lists/dividers', component: lists.DividersPage },
  { path: '/lists/headers', component: lists.HeadersPage },
  { path: '/lists/icon', component: lists.IconPage },
  { path: '/lists/inset', component: lists.InsetPage },
  { path: '/lists/multiline', component: lists.MultilinePage },
  { path: '/lists/no-lines', component: lists.NoLinesPage },
  { path: '/lists/sliding', component: lists.SlidingPage },
  { path: '/lists/thumbnail', component: lists.ThumbnailPage },

  { path: '/loading/basic', component: loading.BasicPage },

  { path: '/menus/basic', component: menus.BasicPage },

  { path: '/modals/basic', component: modals.BasicPage },

  { path: '/navigation/basic', component: navigation.BasicPage },

  { path: '/radios/basic', component: radios.BasicPage },

  { path: '/ranges/basic', component: ranges.BasicPage },

  { path: '/searchbars/basic', component: searchbars.BasicPage },

  { path: '/segments/basic', component: segments.BasicPage },

  { path: '/selects/basic', component: selects.BasicPage },

  { path: '/slides/basic', component: slides.BasicPage },

  { path: '/tabs/badges', component: tabs.BadgesPage },
  { path: '/tabs/basic', component: tabs.BasicPage },
  { path: '/tabs/icon', component: tabs.IconPage },
  { path: '/tabs/icon-text', component: tabs.IconTextPage },

  { path: '/toast/basic', component: toast.BasicPage },

  { path: '/toggles/basic', component: toggles.BasicPage },

  { path: '/toolbar/basic', component: toolbar.BasicPage },
  { path: '/toolbar/buttons', component: toolbar.ButtonsPage },
  { path: '/toolbar/searchbar', component: toolbar.SearchbarPage },
  { path: '/toolbar/segment', component: toolbar.SegmentPage },
  { path: '/toolbar/colors', component: toolbar.ColorsPage}
];

@App({
  templateUrl: './build/app.html',
  config: {
    statusbarPadding: true,
    platforms: {
      android: {
        activator: 'ripple',
        backButtonIcon: 'md-arrow-back'
      }
    }
  },
  pipes: [DisplayRoutePipe]
})
@RouteConfig(ROUTES)
class DemoApp {
  isProductionMode: boolean = false;
  rootPage: any;
  nextPage: any;
  currentPlatform: string = "ios";

  pages = [
    { title: 'Home', component: PageOne },
    { title: 'Friends', component: PageTwo },
    { title: 'Events', component: PageThree }
  ];
  routes = ROUTES;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private config: Config,
    private menu: MenuController,
    private location: Location,
    private zone: NgZone) {

    this.menu.enable(true);
  }

  ngAfterContentInit() {
    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/
    // ------------------------------------------------------------

    if (this.platform.query("production") === "true") {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is("android")) {
        this.currentPlatform = "android";
      } else if (this.platform.is("windows")) {
        this.currentPlatform = "windows";
      }

      if (helpers.hasScrollbar() === true) {
        setTimeout(function() {
          var body = document.getElementsByTagName('body')[0];
          body.className = body.className + ' has-scrollbar';
        }, 500);
      }

      window.parent.postMessage(this.currentPlatform, "*");
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
              this.nextPage = rootPage;
            }

            let nav = this.app.getComponent('nav');
            helpers.debounce(nav.setRoot(this.nextPage), 60, false);
          }
        });
      });
    }
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    helpers.debounce(nav.setRoot(page.component), 60, false);
  }

}
