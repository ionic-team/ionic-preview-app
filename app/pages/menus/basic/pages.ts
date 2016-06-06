import {Component} from "@angular/core";
import {App, MenuController} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/menus/basic/menu-home.html'
})
export class BasicPage {
  constructor(app: App, menu:MenuController) {
    menu.enable(true);
  }
}

@Component({
  templateUrl: './build/pages/menus/basic/menu-home.html'
})
export class PageOne { }

@Component({
  templateUrl: './build/pages/menus/basic/menu-friends.html'
})
export class PageTwo { }

@Component({
  templateUrl: './build/pages/menus/basic/menu-events.html'
})
export class PageThree { }
