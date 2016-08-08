import {Component} from '@angular/core';
import {LoadingController} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/loading/basic/template.html'
})
export class BasicPage {

  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
  }

}
