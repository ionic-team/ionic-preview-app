import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/cards/header/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class HeaderPage {
    constructor() {

    }
}