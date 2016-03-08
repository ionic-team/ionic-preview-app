import {Page, Alert, NavController} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/alerts/basic/template.html'
})
export class BasicPage {

  constructor(public nav: NavController) { }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }

}
