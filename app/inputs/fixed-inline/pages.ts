import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/inputs/fixed-inline/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class FixedInlinePage {
    constructor() {

    }
}
