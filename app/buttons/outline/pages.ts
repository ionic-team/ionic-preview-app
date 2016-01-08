import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/outline/outline.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class OutlinePage {
    constructor() {

    }
}