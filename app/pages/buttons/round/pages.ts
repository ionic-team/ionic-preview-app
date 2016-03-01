import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/buttons/round/round.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class RoundPage {
    constructor() {

    }
}