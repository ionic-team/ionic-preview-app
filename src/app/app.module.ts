import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// action sheets
import { BasicPage as ActionSheetBasicPage } from '../pages/action-sheets/basic/pages';

// alerts
import { BasicPage as AlertBasicPage } from '../pages/alerts/basic/pages';
import { CheckboxPage as AlertCheckboxPage } from '../pages/alerts/checkbox/pages';
import { ConfirmPage as AlertConfirmPage } from '../pages/alerts/confirm/pages';
import { PromptPage as AlertPromptPage } from '../pages/alerts/prompt/pages';
import { RadioPage as AlertRadioPage } from '../pages/alerts/radio/pages';

// badges
import { BasicPage as BadgeBasicPage } from '../pages/badges/basic/pages';

// buttons
import { BasicPage as ButtonBasicPage } from '../pages/buttons/basic/pages';
import { BlockPage as ButtonBlockPage } from '../pages/buttons/block/pages';
import { ClearPage as ButtonClearPage } from '../pages/buttons/clear/pages';
import { ComponentsPage as ButtonComponentsPage } from '../pages/buttons/components/pages';
import { FullPage as ButtonFullPage } from '../pages/buttons/full/pages';
import { IconsPage as ButtonIconsPage } from '../pages/buttons/icons/pages';
import { OutlinePage as ButtonOutlinePage } from '../pages/buttons/outline/pages';
import { RoundPage as ButtonRoundPage } from '../pages/buttons/round/pages';
import { SizesPage as ButtonSizesPage } from '../pages/buttons/sizes/pages';

// fabs
import { BasicPage as FabBasicPage } from '../pages/fabs/basic/pages';

// cards
import { AdvancedMapPage as CardAdvancedMapPage } from '../pages/cards/advanced-map/pages';
import { AdvancedSocialPage as CardAdvancedSocialPage } from '../pages/cards/advanced-social/pages';
import { AdvancedWeatherPage as CardAdvancedWeatherPage } from '../pages/cards/advanced-weather/pages';
import { BackgroundPage as CardBackgroundPage } from '../pages/cards/background/pages';
import { BasicPage as CardBasicPage } from '../pages/cards/basic/pages';
import { HeaderPage as CardHeaderPage } from '../pages/cards/header/pages';
import { ImagePage as CardImagePage } from '../pages/cards/image/pages';
import { ListPage as CardListPage } from '../pages/cards/list/pages';

// checkboxes
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/basic/pages';

// datetime
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/basic/pages';

// gestures
import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';

// grid
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';

// icons
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';

// inputs
import { BasicPage as InputBasicPage } from '../pages/inputs/basic/pages';
import { FloatingPage as InputFloatingPage } from '../pages/inputs/floating/pages';
import { FixedInlinePage as InputFixedInlinePage } from '../pages/inputs/fixed-inline/pages';
import { InlinePage as InputInlinePage } from '../pages/inputs/inline/pages';
import { InsetPage as InputInsetPage } from '../pages/inputs/inset/pages';
import { PlaceholderPage as InputPlaceholderPage } from '../pages/inputs/placeholder/pages';
import { StackedPage as InputStackedPage } from '../pages/inputs/stacked/pages';

// lists
import { AvatarPage as ListAvatarPage } from '../pages/lists/avatar/pages';
import { BasicPage as ListBasicPage } from '../pages/lists/basic/pages';
import { DividersPage as ListDividersPage } from '../pages/lists/dividers/pages';
import { HeadersPage as ListHeadersPage } from '../pages/lists/headers/pages';
import { IconPage as ListIconPage } from '../pages/lists/icon/pages';
import { InsetPage as ListInsetPage } from '../pages/lists/inset/pages';
import { MultilinePage as ListMultilinePage } from '../pages/lists/multiline/pages';
import { NoLinesPage as ListNoLinesPage } from '../pages/lists/no-lines/pages';
import { SlidingPage as ListSlidingPage } from '../pages/lists/sliding/pages';
import { ThumbnailPage as ListThumbnailPage } from '../pages/lists/thumbnail/pages';

// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/basic/pages';

// menu
import { BasicPage as MenuBasicPage } from '../pages/menus/basic/pages';
import { PageOne as MenuPageOne } from '../pages/menus/basic/pages';
import { PageTwo as MenuPageTwo } from '../pages/menus/basic/pages';
import { PageThree as MenuPageThree } from '../pages/menus/basic/pages';

// modals
import { BasicPage as ModalBasicPage, ModalContentPage } from '../pages/modals/basic/pages';

// navigation
import { BasicPage as NavigationBasicPage, NavigationDetailsPage } from '../pages/navigation/basic/pages';

// popover
import { BasicPage as PopoverBasicPage, PopoverPage as PopoverContentPage } from '../pages/popovers/basic/pages';

// radios
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';

// segments
import { BasicPage as SegmentBasicPage } from '../pages/segments/basic/pages';

// selects
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';

// slides
import { BasicPage as SlideBasicPage } from '../pages/slides/basic/pages';

// tabs
import { BadgesPage as TabBadgesPage, TabBadgesContent } from '../pages/tabs/badges/pages';
import { BasicPage as TabBasicPage, TabBasicContentPage } from '../pages/tabs/basic/pages';
import { IconPage as TabIconPage, TabIconContentPage } from '../pages/tabs/icon/pages';
import { IconTextPage as TabIconTextPage, TabIconTextContentPage } from '../pages/tabs/icon-text/pages';

// toast
import { BasicPage as ToastBasicPage } from '../pages/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages/toolbar/buttons/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages/toolbar/colors/pages';
import { Page2 as ToolbarColorsPage2 } from '../pages/toolbar/colors/pages';
import { Page3 as ToolbarColorsPage3 } from '../pages/toolbar/colors/pages';
import { Page4 as ToolbarColorsPage4 } from '../pages/toolbar/colors/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages/toolbar/segment/pages';

// pipes
import { DisplayRoutePipe } from '../pipes/display-route';

@NgModule({
  declarations: [
    MyApp,

    ActionSheetBasicPage,

    AlertBasicPage,
    AlertCheckboxPage,
    AlertConfirmPage,
    AlertPromptPage,
    AlertRadioPage,

    BadgeBasicPage,

    ButtonBasicPage,
    ButtonBlockPage,
    ButtonClearPage,
    ButtonComponentsPage,
    ButtonFullPage,
    ButtonIconsPage,
    ButtonOutlinePage,
    ButtonRoundPage,
    ButtonSizesPage,

    FabBasicPage,

    CardAdvancedMapPage,
    CardAdvancedSocialPage,
    CardAdvancedWeatherPage,
    CardBackgroundPage,
    CardBasicPage,
    CardHeaderPage,
    CardImagePage,
    CardListPage,

    CheckboxBasicPage,

    DatetimeBasicPage,

    GestureBasicPage,

    GridBasicPage,

    IconBasicPage,

    InputBasicPage,
    InputFloatingPage,
    InputFixedInlinePage,
    InputInlinePage,
    InputInsetPage,
    InputPlaceholderPage,
    InputStackedPage,

    ListAvatarPage,
    ListBasicPage,
    ListDividersPage,
    ListHeadersPage,
    ListIconPage,
    ListInsetPage,
    ListMultilinePage,
    ListNoLinesPage,
    ListSlidingPage,
    ListThumbnailPage,

    LoadingBasicPage,

    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,

    ModalBasicPage,
    ModalContentPage,

    NavigationBasicPage,
    NavigationDetailsPage,

    PopoverBasicPage,
    PopoverContentPage,

    RadioBasicPage,

    RangeBasicPage,

    SearchbarBasicPage,

    SegmentBasicPage,

    SelectBasicPage,

    SlideBasicPage,

    TabBadgesPage,
    TabBadgesContent,

    TabBasicPage,
    TabBasicContentPage,

    TabIconPage,
    TabIconContentPage,

    TabIconTextPage,
    TabIconTextContentPage,

    ToastBasicPage,

    ToggleBasicPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    ToolbarSearchbarPage,
    ToolbarSegmentPage,

    DisplayRoutePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
     },
     {
       links: [
        { component: ActionSheetBasicPage, name: 'ActionSheetBasicPage', segment: 'action-sheet-basic' },

        { component: AlertBasicPage, name: 'AlertBasicPage', segment: 'alert-basic' },
        { component: AlertCheckboxPage, name: 'AlertCheckboxPage', segment: 'alert-checkbox' },
        { component: AlertConfirmPage, name: 'AlertConfirmPage', segment: 'alert-confirm' },
        { component: AlertPromptPage, name: 'AlertPromptPage', segment: 'alert-prompt' },
        { component: AlertRadioPage, name: 'AlertRadioPage', segment: 'alert-radio' },


        { component: BadgeBasicPage, name: 'BadgeBasicPage', segment: 'badge-basic' },

        { component: ButtonBasicPage, name: 'ButtonBasicPage', segment: 'button-basic' },
        { component: ButtonBlockPage, name: 'ButtonBlockPage', segment: 'button-block' },
        { component: ButtonClearPage, name: 'ButtonClearPage', segment: 'button-clear' },
        { component: ButtonComponentsPage, name: 'ButtonComponentsPage', segment: 'button-components' },
        { component: ButtonFullPage, name: 'ButtonFullPage', segment: 'button-full' },
        { component: ButtonIconsPage, name: 'ButtonIconsPage', segment: 'button-icons' },
        { component: ButtonOutlinePage, name: 'ButtonOutlinePage', segment: 'button-outline' },
        { component: ButtonRoundPage, name: 'ButtonRoundPage', segment: 'button-round' },
        { component: ButtonSizesPage, name: 'ButtonSizesPage', segment: 'button-sizes' },

        { component: FabBasicPage, name: 'FabBasicPage', segment: 'fab-basic' },

        { component: CardAdvancedMapPage, name: 'CardAdvancedMapPage', segment: 'card-advanced-map' },
        { component: CardAdvancedSocialPage, name: 'CardAdvancedSocialPage', segment: 'card-advanced-social' },
        { component: CardAdvancedWeatherPage, name: 'CardAdvancedWeatherPage', segment: 'card-advanced-weather' },
        { component: CardBackgroundPage, name: 'CardBackgroundPage', segment: 'card-background' },
        { component: CardBasicPage, name: 'CardBasicPage', segment: 'card-basic' },
        { component: CardHeaderPage, name: 'CardHeaderPage', segment: 'card-header' },
        { component: CardImagePage, name: 'CardImagePage', segment: 'card-image' },
        { component: CardListPage, name: 'CardListPage', segment: 'card-list' },

        { component: CheckboxBasicPage, name: 'CheckboxBasicPage', segment: 'checkbox-basic' },

        { component: DatetimeBasicPage, name: 'DatetimeBasicPage', segment: 'datetime-basic' },

        { component: GestureBasicPage, name: 'GestureBasicPage', segment: 'gesture-basic' },

        { component: GridBasicPage, name: 'GridBasicPage', segment: 'grid-basic' },

        { component: IconBasicPage, name: 'IconBasicPage', segment: 'icon-basic' },

        { component: InputBasicPage, name: 'InputBasicPage', segment: 'input-basic' },
        { component: InputFloatingPage, name: 'InputFloatingPage', segment: 'input-floating' },
        { component: InputFixedInlinePage, name: 'InputFixedInlinePage', segment: 'input-fixed-inline' },
        { component: InputInlinePage, name: 'InputInlinePage', segment: 'input-inline' },
        { component: InputInsetPage, name: 'InputInsetPage', segment: 'input-inset' },
        { component: InputPlaceholderPage, name: 'InputPlaceholderPage', segment: 'input-placeholder' },
        { component: InputStackedPage, name: 'InputStackedPage', segment: 'input-stacked' },

        { component: ListAvatarPage, name: 'ListAvatarPage', segment: 'list-avatar' },
        { component: ListBasicPage, name: 'ListBasicPage', segment: 'list-basic' },
        { component: ListDividersPage, name: 'ListDividersPage', segment: 'list-dividers' },
        { component: ListHeadersPage, name: 'ListHeadersPage', segment: 'list-headers' },
        { component: ListIconPage, name: 'ListIconPage', segment: 'list-icon' },
        { component: ListInsetPage, name: 'ListInsetPage', segment: 'list-inset' },
        { component: ListMultilinePage, name: 'ListMultilinePage', segment: 'list-multiline' },
        { component: ListNoLinesPage, name: 'ListNoLinesPage', segment: 'list-no-lines' },
        { component: ListSlidingPage, name: 'ListSlidingPage', segment: 'list-sliding' },
        { component: ListThumbnailPage, name: 'ListThumbnailPage', segment: 'list-thumbnail' },

        { component: LoadingBasicPage, name: 'LoadingBasicPage', segment: 'loading-basic' },

        { component: MenuBasicPage, name: 'MenuBasicPage', segment: 'menu-basic' },
        { component: MenuPageOne, name: 'MenuPageOne', segment: 'menu-one' },
        { component: MenuPageTwo, name: 'MenuPageTwo', segment: 'menu-two' },
        { component: MenuPageThree, name: 'MenuPageThree', segment: 'menu-three' },

        { component: ModalBasicPage, name: 'ModalBasicPage', segment: 'modal-basic' },
        { component: ModalContentPage, name: 'ModalContentPage', segment: 'modal-content' },

        { component: NavigationBasicPage, name: 'NavigationBasicPage', segment: 'navigation-basic' },
        { component: NavigationDetailsPage, name: 'NavigationDetailsPage', segment: 'navigation-details' },

        { component: PopoverBasicPage, name: 'PopoverBasicPage', segment: 'popover-basic' },
        { component: PopoverContentPage, name: 'PopoverContentPage', segment: 'popover-content' },

        { component: RadioBasicPage, name: 'RadioBasicPage', segment: 'radio-basic' },

        { component: RangeBasicPage, name: 'RangeBasicPage', segment: 'range-basic' },

        { component: SearchbarBasicPage, name: 'SearchbarBasicPage', segment: 'searchbar-basic' },

        { component: SegmentBasicPage, name: 'SegmentBasicPage', segment: 'segment-basic' },

        { component: SelectBasicPage, name: 'SelectBasicPage', segment: 'select-basic' },

        { component: SlideBasicPage, name: 'SlideBasicPage', segment: 'slide-basic' },

        { component: TabBadgesPage, name: 'TabBadgesPage', segment: 'tab-badges' },
        { component: TabBasicPage, name: 'TabBasicPage', segment: 'tab-basic' },
        { component: TabIconPage, name: 'TabIconPage', segment: 'tab-icon' },
        { component: TabIconTextPage, name: 'TabIconTextPage', segment: 'tab-icon-text' },

        { component: ToastBasicPage, name: 'ToastBasicPage', segment: 'toast-basic' },

        { component: ToggleBasicPage, name: 'ToggleBasicPage', segment: 'toggle-basic' },

        { component: ToolbarBasicPage, name: 'ToolbarBasicPage', segment: 'toolbar-basic' },
        { component: ToolbarButtonsPage, name: 'ToolbarButtonsPage', segment: 'toolbar-buttons' },
        { component: ToolbarColorsPage, name: 'ToolbarColorsPage', segment: 'toolbar-colors' },
        { component: ToolbarColorsPage2, name: 'ToolbarColorsPage2', segment: 'toolbar-colors2' },
        { component: ToolbarColorsPage3, name: 'ToolbarColorsPage3', segment: 'toolbar-colors3' },
        { component: ToolbarColorsPage4, name: 'ToolbarColorsPage4', segment: 'toolbar-colors4' },
        { component: ToolbarSearchbarPage, name: 'ToolbarSearchbarPage', segment: 'toolbar-searchbar' },
        { component: ToolbarSegmentPage, name: 'ToolbarSegmentPage', segment: 'toolbar-segment' }
       ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetBasicPage,

    AlertBasicPage,
    AlertCheckboxPage,
    AlertConfirmPage,
    AlertPromptPage,
    AlertRadioPage,

    BadgeBasicPage,

    ButtonBasicPage,
    ButtonBlockPage,
    ButtonClearPage,
    ButtonComponentsPage,
    ButtonFullPage,
    ButtonIconsPage,
    ButtonOutlinePage,
    ButtonRoundPage,
    ButtonSizesPage,

    FabBasicPage,

    CardAdvancedMapPage,
    CardAdvancedSocialPage,
    CardAdvancedWeatherPage,
    CardBackgroundPage,
    CardBasicPage,
    CardHeaderPage,
    CardImagePage,
    CardListPage,

    CheckboxBasicPage,

    DatetimeBasicPage,

    GestureBasicPage,

    GridBasicPage,

    IconBasicPage,

    InputBasicPage,
    InputFloatingPage,
    InputFixedInlinePage,
    InputInlinePage,
    InputInsetPage,
    InputPlaceholderPage,
    InputStackedPage,

    ListAvatarPage,
    ListBasicPage,
    ListDividersPage,
    ListHeadersPage,
    ListIconPage,
    ListInsetPage,
    ListMultilinePage,
    ListNoLinesPage,
    ListSlidingPage,
    ListThumbnailPage,

    LoadingBasicPage,

    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,

    ModalBasicPage,
    ModalContentPage,

    NavigationBasicPage,
    NavigationDetailsPage,

    PopoverBasicPage,
    PopoverContentPage,

    RadioBasicPage,

    RangeBasicPage,

    SearchbarBasicPage,

    SegmentBasicPage,

    SelectBasicPage,

    SlideBasicPage,

    TabBadgesPage,
    TabBadgesContent,

    TabBasicPage,
    TabBasicContentPage,

    TabIconPage,
    TabIconContentPage,

    TabIconTextPage,
    TabIconTextContentPage,

    ToastBasicPage,

    ToggleBasicPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    ToolbarSearchbarPage,
    ToolbarSegmentPage
  ],
  providers: []
})
export class AppModule { }
