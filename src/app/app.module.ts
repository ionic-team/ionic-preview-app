import { NgModule } from '@angular/core';
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
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
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
