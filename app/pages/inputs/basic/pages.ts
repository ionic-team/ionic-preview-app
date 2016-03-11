import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';
import {Page} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/inputs/basic/template.html',
  providers: [FormBuilder]
})
export class BasicPage {
  form;

  constructor() {
    this.form = new ControlGroup({
      firstName: new Control("", Validators.required),
      lastName: new Control("", Validators.required)
    });
  }

  processForm(event) {
    // TODO: display input in a popup
    console.log(event);
  }

}
