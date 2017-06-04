import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Navigation</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class BasicPage {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }

}
