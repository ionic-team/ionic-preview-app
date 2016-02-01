import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/slides/basic/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class BasicPage {
  constructor() {

  }
}
