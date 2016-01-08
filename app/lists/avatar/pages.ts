import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
    templateUrl: './build/lists/avatar/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class AvatarPage {
    constructor() {

    }
}
