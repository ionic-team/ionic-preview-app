import {Component} from '@angular/core';
import {App, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'menu-home.html'
})
export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}

@Component({
  templateUrl: 'menu-home.html'
})
export class PageOne { }

@Component({
  templateUrl: 'menu-friends.html'
})
export class PageTwo { }

@Component({
  templateUrl: 'menu-events.html'
})
export class PageThree { }
