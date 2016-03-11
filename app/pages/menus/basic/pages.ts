import {IonicApp, Page} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/menus/basic/menu-home.html'
})
export class BasicPage {
  constructor(app: IonicApp) {
    app.getComponent('leftMenu').enable(true);
  }
}

@Page({
  templateUrl: './build/pages/menus/basic/menu-home.html'
})
export class PageOne { }

@Page({
  templateUrl: './build/pages/menus/basic/menu-friends.html'
})
export class PageTwo { }

@Page({
  templateUrl: './build/pages/menus/basic/menu-events.html'
})
export class PageThree { }
