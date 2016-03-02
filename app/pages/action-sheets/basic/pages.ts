import {Platform, Page, ActionSheet, NavController} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/action-sheets/basic/basic.html',
  directives: [forwardRef(() => AndroidAttribute)]

})
export class BasicPage {

  constructor(
    public platform: Platform,
    public nav: NavController) {}

  openMenu() {
    let buttonHandler = (index) => {
      console.log('Button clicked', index);
      if (index == 1) { return false; }
      return true;
    }

    if (this.platform.is('android')) {
      var androidSheet = {
        title: 'Albums',
        buttons: [
          {
            text: 'Delete',
            style: 'destructive',
            icon: 'md-trash',
            handler: () => {
              console.log('Destructive clicked');
            }
          },
          { text: 'Share',
            handler: buttonHandler,
            icon: 'share'
          },
          { text: 'Play',
            handler: buttonHandler,
            icon: 'arrow-dropright-circle'
          },
          { text: 'Favorite',
            handler: buttonHandler,
            icon: 'md-heart-outline'
          },
          {
            text: 'Cancel',
            style: 'cancel',
            icon: 'md-close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ],
      };
    }

    let actionSheet = ActionSheet.create( androidSheet || {
      buttons: [
        {
          text: 'Delete',
          style: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          style: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    this.nav.present(actionSheet);
  }

  onPageWillLeave() {
    actionSheet && actionSheet.dismiss();
  }

}
