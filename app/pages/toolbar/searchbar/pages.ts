import {Page, Platform} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/toolbar/searchbar/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class SearchbarPage {
    constructor() {

    }
}
