import { Component } from '@angular/core';
import { InfiniteScroll } from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})
export class InfiniteScrollDemoPage {

  items: string[] = [
    'Fast Times at Ridgemont High',
    'Peggy Sue Got Married',
    'Raising Arizona',
    'Moonstruck',
    'Fire Birds',
    'Honeymoon in Vegas',
    'Amos & Andrew',
    'It Could Happen to You',
    'Trapped in Paradise',
    'Leaving Las Vegas',
    'The Rock',
    'Con Air',
    'Face/Off',
    'City of Angels',
    'Gone in Sixty Seconds'
  ];

  constructor() {}

  doInfinite(infiniteScroll: InfiniteScroll) {
    
    let items: string[] = [
      'Fast Times at Ridgemont High',
      'Peggy Sue Got Married',
      'Raising Arizona',
      'Moonstruck',
      'Fire Birds',
      'Honeymoon in Vegas',
      'Amos & Andrew',
      'It Could Happen to You',
      'Trapped in Paradise',
      'Leaving Las Vegas',
      'The Rock',
      'Con Air',
      'Face/Off',
      'City of Angels',
      'Gone in Sixty Seconds'      
    ]; 

    // add delay so we can see infinite scroll content
    setTimeout(()=>{
      
      //append to the list
      for (let i = 0; i < items.length; i++) {
        this.items.push( items[i] );
      }
      infiniteScroll.complete();
    }, 2000)        
    
  }

}