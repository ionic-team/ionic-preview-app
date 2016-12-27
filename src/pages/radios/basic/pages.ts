import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
