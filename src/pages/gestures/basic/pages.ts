import { Component } from '@angular/core';
import { Gesture } from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})
export class BasicPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  constructor() {

  }
  pressEvent(e) {
    this.press++
  }
  
  panEvent(e) {
    this.pan++
  }
  
  swipeEvent(gesture: Gesture) {
     const direction:number = Number(gesture.direction);
    // swipe right
    if(direction === 2){
      this.swipe++;
    }
    // swipe left
    if(direction === 4){
      this.swipe--;
    }
  }
  
  tapEvent(e) {
    this.tap++
  }

}
