import {App, IonicApp, Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
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


import * as helpers from '../../helpers';

@Page({
    templateUrl: './build/radios/basic/template.html',
    directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class RadioPage {
    constructor() {
      this.langs = new Control("");
      this.langForm = new ControlGroup({
        "langs": this.langs
      });
    }
    doSubmit(event) {
      console.log('Submitting form', this.langeForm.value);
      event.preventDefault();
    }
}
