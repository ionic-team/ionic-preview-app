import {Directive, ElementRef, Renderer} from 'angular2/core';
import {Platform, Navbar} from 'ionic-framework/ionic';

import * as actionSheets from '../pages/action-sheets/action-sheets';
import * as alerts from '../pages/alerts/alerts';
import * as badges from '../pages/badges/badges';
import * as buttons from '../pages/buttons/buttons';
import * as cards from '../pages/cards/cards';
import * as checkboxes from '../pages/checkboxes/checkboxes';
import * as grid from '../pages/grid/grid';
import * as icons from '../pages/icons/icons';
import * as inputs from '../pages/inputs/inputs';
import * as lists from '../pages/lists/lists';
import * as menus from '../pages/menus/menus';
import * as modals from '../pages/modals/modals';
import * as navigation from '../pages/navigation/navigation';
import * as radios from '../pages/radios/radios';
import * as ranges from '../pages/ranges/ranges';
import * as searchbars from '../pages/searchbars/searchbars';
import * as segments from '../pages/segments/segments';
import * as selects from '../pages/selects/selects';
import * as slides from '../pages/slides/slides';
import * as tabs from '../pages/tabs/tabs';
import * as toggles from '../pages/toggles/toggles';
import * as toolbar from '../pages/toolbar/toolbar';


@Directive({
  selector: '.android-attr',
})
export class AndroidAttribute {
  isAndroid: boolean;

  constructor(
    public platform: Platform,
    public elementRef: ElementRef,
    public renderer: Renderer) {
    this.isAndroid = platform.is('android');
    renderer.setElementAttribute(elementRef.nativeElement, 'primary', this.isAndroid ? '' : null);
  }

}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

export function hasScrollbar() {

  if (typeof window.top.innerWidth === 'number') {
    return window.top.innerWidth > window.top.document.documentElement.clientWidth;
  }

  // rootElem for quirksmode
  var rootElem = window.top.document.documentElement || window.top.document.body;

  // Check overflow style property on body for fauxscrollbars
  var overflowStyle;

  if (typeof rootElem.currentStyle !== 'undefined') {
    overflowStyle = rootElem.currentStyle.overflow;
  }

  overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;

  // Also need to check the Y axis overflow
  var overflowYStyle;

  if (typeof rootElem.currentStyle !== 'undefined') {
    overflowYStyle = rootElem.currentStyle.overflowY;
  }

  overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;

  var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
  var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
  var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

  return (contentOverflows && overflowShown) || (alwaysShowScroll)
}

export function getPages() {
  return {
    'overview': actionSheets.BasicPage,
    'action-sheets': actionSheets.BasicPage,
    'alert': alerts.BasicPage,
    'alert-confirm': alerts.ConfirmPage,
    'alert-prompt': alerts.PromptPage,
    'alert-radio': alerts.RadioPage,
    'alert-checkbox': alerts.CheckboxPage,
    'badges': badges.BasicPage,
    'buttons': buttons.BasicPage,
    'block-buttons': buttons.BlockPage,
    'clear-buttons': buttons.ClearPage,
    'full-buttons': buttons.FullPage,
    'outline-buttons': buttons.OutlinePage,
    'round-buttons': buttons.RoundPage,
    'floating-action-buttons': buttons.FabPage,
    'buttons-in-components': buttons.ComponentsPage,
    'button-sizes': buttons.SizesPage,
    'icon-buttons': buttons.IconsPage,
    'cards': cards.BasicPage,
    'card-header': cards.HeaderPage,
    'card-list': cards.ListPage,
    'card-image': cards.ImagePage,
    'card-background': cards.BackgroundPage,
    'advanced-cards': cards.AdvancedSocialPage,
    'card-advanced-map': cards.AdvancedMapPage,
    'card-advanced-social': cards.AdvancedSocialPage,
    'card-advanced-weather': cards.AdvancedWeatherPage,
    'checkbox': checkboxes.CheckboxPage,
    'radio': radios.RadioPage,
    'range': ranges.RangePage,
    'segment': segments.SegmentPage,
    'select': selects.SelectPage,
    'searchbar': searchbars.SearchPage,
    'toggle': toggles.TogglePage,
    'inputs': inputs.BasicPage,
    'fixed-inline-labels': inputs.FixedInlinePage,
    'floating-labels': inputs.FloatingPage,
    'inline-labels': inputs.InlinePage,
    'inset-labels': inputs.InsetPage,
    'placeholder-labels': inputs.PlaceholderPage,
    'stacked-labels': inputs.StackedPage,
    'icons': icons.BasicPage,
    'grid': grid.BasicPage,
    'lists': lists.BasicPage,
    'list-lines': lists.BasicPage,
    'list-no-lines': lists.NoLinesPage,
    'avatar-list': lists.AvatarPage,
    'icon-list': lists.IconPage,
    'inset-list': lists.InsetPage,
    'list-headers': lists.HeadersPage,
    'multiline-list': lists.MultilinePage,
    'thumbnail-list': lists.ThumbnailPage,
    'menus': menus.BasicPage,
    'modals': modals.BasicPage,
    'navigation': navigation.BasicPage,
    'slides': slides.BasicPage,
    'tabs': tabs.BasicPage,
    'tabs-icon': tabs.IconPage,
    'tabs-icon-text': tabs.IconTextPage,
    'toolbar': toolbar.BasicPage
  };
}

export function getPageFor(hash) {
  return getPages()[hash]
}

export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
