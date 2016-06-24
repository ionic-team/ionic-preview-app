import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from '@angular/common';
import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/inputs/basic/template.html',
  providers: [FormBuilder]
})
export class BasicPage {
  form;

  constructor(private nav: NavController) {
    this.form = new ControlGroup({
      firstName: new Control("", Validators.required),
      lastName: new Control("", Validators.required)
    });
  }

  processForm() {
    let alert = Alert.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.firstName + " " + this.form.value.lastName,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      this.nav.present(alert);
    }
  }

}
