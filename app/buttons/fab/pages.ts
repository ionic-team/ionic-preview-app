import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/fab/fab.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class FabPage {
    constructor() {

    }
}