import {App, IonicApp, Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../helpers';

@Page({
    templateUrl: './build/inputs/radio/template.html',
    directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class RadioPage {
    constructor() {
    }
}
