import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/block/block.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class BlockPage {
    constructor() {

    }
}