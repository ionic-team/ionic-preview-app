import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/icons/icons.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class IconsPage {
    constructor() {

    }
}