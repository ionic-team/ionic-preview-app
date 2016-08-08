import {Component} from '@angular/core';
import {App} from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators,

} from '@angular/forms';


@Component({
  templateUrl: './build/pages/radios/basic/template.html'
})
export class BasicPage {
  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl('')
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
