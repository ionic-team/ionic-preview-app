import { Component } from '@angular/core';


@Component({
  templateUrl: 'template.html'
})
export class SearchbarPage {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Angular 1.x',
      'Angular 2',
      'ReactJS',
      'EmberJS',
      'Meteor',
      'Typescript',
      'Dart',
      'CoffeeScript'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
