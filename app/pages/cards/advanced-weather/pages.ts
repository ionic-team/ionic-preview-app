import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/cards/advanced-weather/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class AdvancedWeatherPage {
    constructor() {

    }
}
