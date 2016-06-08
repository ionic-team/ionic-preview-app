import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';


@Component({
  templateUrl: './build/pages/toast/basic/template.html'
})
export class BasicPage {
  constructor(public nav: NavController) { }

  showToast(position: string) {
    let toast = Toast.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position: position
    });

    this.nav.present(toast);
  }

  showToastWithCloseButton(){
    const toast = Toast.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    this.nav.present(toast);
  }

  showLongToast(){
    let toast = Toast.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });

    this.nav.present(toast);
  }
}
