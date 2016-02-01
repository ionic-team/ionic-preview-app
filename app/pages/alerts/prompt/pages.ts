import {Page, Alert, NavController} from 'ionic-framework/ionic';
import {AndroidAttribute} from '../../../directives/helpers';
import {forwardRef} from 'angular2/core';


@Page({
  templateUrl: './build/pages/alerts/prompt/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class PromptPage {

  constructor(nav: NavController) {
    this.nav = nav;
  }

  doPrompt() {
    let prompt = Alert.create({
      title: 'Login',
      body: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    this.nav.present(prompt);
  }

}
