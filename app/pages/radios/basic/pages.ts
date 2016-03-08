import {App, IonicApp, Page} from 'ionic-angular';
import {
  Control,
  ControlGroup,
  NgForm,
  Validators,
  NgControl,
  ControlValueAccessor,
  NgControlName,
  NgFormModel,
  FormBuilder
} from 'angular2/common';


@Page({
  templateUrl: './build/pages/radios/basic/template.html'
})
export class BasicPage {
  langs;
  langForm;

  constructor() {
    this.langs = new Control("");
    this.langForm = new ControlGroup({
      "langs": this.langs
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
