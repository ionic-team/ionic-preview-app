import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/checkboxes/basic/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class CheckboxPage{
  constructor() {
  }
}
