import { Component } from '@angular/core';

@Component({
  templateUrl: 'template.html'
})
export class VirtualScrollThumbnailPage {

  items: any[] = [
    {thumbnail: 'assets/img/thumbnail-batman.png', title: 'Batman'}, {thumbnail: 'assets/img/thumbnail-esb.png', title: 'Return of the Jedi'},
    {thumbnail: 'assets/img/thumbnail-duckling-1.jpg', title: 'Mr. Ducky'}, {thumbnail: 'assets/img/thumbnail-bttf.png', title: 'Back to the Future'},
    {thumbnail: 'assets/img/thumbnail-totoro.png', title: 'My Neighbor Totoro'}, {thumbnail: 'assets/img/thumbnail-kitten-3.jpg', title: 'CATastrophe'},
    {thumbnail: 'assets/img/thumbnail-kitten-1.jpg', title: 'Ms. KittyPants'}, {thumbnail: 'assets/img/thumbnail-terminator.png', title: 'Terminator'},
    {thumbnail: 'assets/img/thumbnail-duckling-2.jpg', title: 'Mr. Ducky: Vengeance'}, {thumbnail: 'assets/img/thumbnail-rotla.png', title: 'Indiana Jones'},
    {thumbnail: 'assets/img/thumbnail-puppy-4.jpg', title: 'Puppytime'}, {thumbnail: 'assets/img/thumbnail-duckling-3.jpg', title: 'Duck, Duck... Moose?'},
    {thumbnail: 'assets/img/thumbnail-kitten-2.jpg', title: 'Dr. Waffles and Friends'}, {thumbnail: 'assets/img/thumbnail-puppy-1.jpg', title: 'Moar Dogs'},
    {thumbnail: 'assets/img/thumbnail-puppy-3.jpg', title: 'Doggo and Co.'}, {thumbnail: 'assets/img/thumbnail-duckling-4.jpg', title: 'Duck Tales'},
    {thumbnail: 'assets/img/thumbnail-puppy-2.jpg', title: 'I Am Dog'}, {thumbnail: 'assets/img/thumbnail-kitten-4.jpg', title: 'Too Many Cats'}
  ]
  constructor() {
    this.makeHugeArray();    
  }

  makeHugeArray() {
    for (let i = 0; i < 10; i++) {
      let copy = this.items;
      this.items = this.items.concat(copy);
    }
  }

}