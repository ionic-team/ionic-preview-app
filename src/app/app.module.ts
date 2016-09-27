import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// action sheets
import { BasicPage as ActionSheetBasicPage} from '../pages/action-sheets/action-sheets';

// alerts
import { BasicPage as AlertBasicPage } from '../pages/alerts/alerts';
import { CheckboxPage as AlertCheckboxPage } from '../pages/alerts/alerts';
import { ConfirmPage as AlertConfirmPage } from '../pages/alerts/alerts';
import { PromptPage as AlertPromptPage } from '../pages/alerts/alerts';
import { RadioPage as AlertRadioPage } from '../pages/alerts/alerts';

// badges
import { BasicPage as BadgeBasicPage } from '../pages/badges/badges';

// buttons
import { BasicPage as ButtonBasicPage } from '../pages/buttons/buttons';
import { BlockPage as ButtonBlockPage } from '../pages/buttons/buttons';
import { ClearPage as ButtonClearPage } from '../pages/buttons/buttons';
import { ComponentsPage as ButtonComponentsPage } from '../pages/buttons/buttons';
import { FullPage as ButtonFullPage } from '../pages/buttons/buttons';
import { IconsPage as ButtonIconsPage } from '../pages/buttons/buttons';
import { OutlinePage as ButtonOutlinePage } from '../pages/buttons/buttons';
import { RoundPage as ButtonRoundPage } from '../pages/buttons/buttons';
import { SizesPage as ButtonSizesPage } from '../pages/buttons/buttons';

// fabs
import { BasicPage as FabsBasicPage } from '../pages/fabs/fabs';

// cards
import { AdvancedMapPage as CardAdvancedMapPage } from '../pages/cards/cards';
import { AdvancedSocialPage as CardAdvancedSocialPage } from '../pages/cards/cards';
import { AdvancedWeatherPage as CardAdvancedWeatherPage } from '../pages/cards/cards';
import { BackgroundPage as CardBackgroundPage } from '../pages/cards/cards';
import { BasicPage as CardBasicPage } from '../pages/cards/cards';
import { HeaderPage as CardHeaderPage } from '../pages/cards/cards';
import { ImagePage as CardImagePage } from '../pages/cards/cards';
import { ListPage as CardListPage } from '../pages/cards/cards';

// checkboxes
import { BasicPage as CheckBoxesBasicPage } from '../pages/checkboxes/checkboxes';

// datetime
import { BasicPage as DateTimeBasicPage } from '../pages/datetime/datetime';

// gestures
import { BasicPage as GestureBasicPage } from '../pages/gestures/gestures';

// grid
import { BasicPage as GridBasicPage } from '../pages/grid/grid';

// icons
import { BasicPage as IconBasicPage } from '../pages/icons/icons';

// inputs
import { BasicPage as InputBasicPage } from '../pages/inputs/inputs';
import { FloatingPage as InputFloatingPage } from '../pages/inputs/inputs';
import { FixedInlinePage as InputFixedInlinePage } from '../pages/inputs/inputs';
import { InlinePage as InputInlinePage } from '../pages/inputs/inputs';
import { InsetPage as InputInsetPage } from '../pages/inputs/inputs';
import { PlaceholderPage as InputPlaceholderPage } from '../pages/inputs/inputs';
import { StackedPage as InputStackedPage } from '../pages/inputs/inputs';

// lists
import { AvatarPage as ListAvatarPage } from '../pages/lists/lists';
import { BasicPage as ListBasicPage } from '../pages/lists/lists';
import { DividersPage as ListDividersPage } from '../pages/lists/lists';
import { HeadersPage as ListHeadersPage } from '../pages/lists/lists';
import { IconPage as ListIconPage } from '../pages/lists/lists';
import { InsetPage as ListInsetPage } from '../pages/lists/lists';
import { MultilinePage as ListMultilinePage } from '../pages/lists/lists';
import { NoLinesPage as ListNoLinesPage } from '../pages/lists/lists';
import { SlidingPage as ListSlidingPage } from '../pages/lists/lists';
import { ThumbnailPage as ListThumbnailPage } from '../pages/lists/lists';

// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/loading';

// menu
import { BasicPage as MenuBasicPage } from '../pages/menus/menus';
import { PageOne as MenuPageOne } from '../pages/menus/menus';
import { PageTwo as MenuPageTwo } from '../pages/menus/menus';
import { PageThree as MenuPageThree } from '../pages/menus/menus';

// modals
import { BasicPage as ModalBasicPage } from '../pages/modals/modals';
import { ModalsContentPage as ModalContentPage } from '../pages/modals/modals';

// navigation
import { BasicPage as NavigationBasicPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigation';

// popover
import { BasicPage as PopoverBasicPage } from '../pages/popovers/popovers';
import { PopoverPage as PopoverContentPage } from '../pages/popovers/popovers';

// radios
import { BasicPage as RadioBasicPage } from '../pages/radios/radios';

// ranges
import { BasicPage as RangeBasicPage } from '../pages/ranges/ranges';

// searchbar
import { BasicPage as SearchBarBasicPage } from '../pages/searchbars/searchbars';

// segments
import { BasicPage as SegmentBasicPage } from '../pages/segments/segments';

// selects
import { BasicPage as SelectBasicPage } from '../pages/selects/selects';

// slides
import { BasicPage as SlidesBasicPage } from '../pages/slides/slides';

// tabs
import { BadgesPage as TabsBadgesPage } from '../pages/tabs/tabs';
import { TabBadgePage as TabsBadgesContent } from '../pages/tabs/tabs';

import { BasicPage as TabsBasicPage } from '../pages/tabs/tabs';
import { TabTextPage as TabsBasicContentPage } from '../pages/tabs/tabs';

import { IconPage as TabsIconPage } from '../pages/tabs/tabs';
import { TabIconPage as TabsIconContentPage } from '../pages/tabs/tabs';

import { IconTextPage as TabsIconTextPage } from '../pages/tabs/tabs';
import { TabIconTextPage as TabsIconTextContentPage } from '../pages/tabs/tabs';

// toast
import { BasicPage as ToastBasicPage } from '../pages/toast/toast';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages/toggles/toggles';

// toolbars
import { BasicPage as ToolBarBasicPage } from '../pages/toolbar/toolbar';
import { ButtonsPage as ToolBarButtonsPage } from '../pages/toolbar/toolbar';

import { ColorsPage as ToolBarColorsPage } from '../pages/toolbar/toolbar';
import { Page2 as ToolBarColorsPage2 } from '../pages/toolbar/toolbar';
import { Page3 as ToolBarColorsPage3 } from '../pages/toolbar/toolbar';
import { Page4 as ToolBarColorsPage4 } from '../pages/toolbar/toolbar';

import { SearchbarPage as ToolBarSearchbarPage } from '../pages/toolbar/toolbar';

import { SegmentPage as ToolBarSegmentPage } from '../pages/toolbar/toolbar';


// pipes
import {DisplayRoutePipe} from '../pipes/display-route';

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

    FabsBasicPage,

    CardAdvancedMapPage,
    CardAdvancedSocialPage,
    CardAdvancedWeatherPage,
    CardBackgroundPage,
    CardBasicPage,
    CardHeaderPage,
    CardImagePage,
    CardListPage,

    CheckBoxesBasicPage,

    DateTimeBasicPage,

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

    SearchBarBasicPage,

    SegmentBasicPage,

    SelectBasicPage,

    SlidesBasicPage,

    TabsBadgesPage,
    TabsBadgesContent,

    TabsBasicPage,
    TabsBasicContentPage,

    TabsIconPage,
    TabsIconContentPage,

    TabsIconTextPage,
    TabsIconTextContentPage,

    ToastBasicPage,

    ToggleBasicPage,

    ToolBarBasicPage,
    ToolBarButtonsPage,
    ToolBarColorsPage,
    ToolBarColorsPage2,
    ToolBarColorsPage3,
    ToolBarColorsPage4,
    ToolBarSearchbarPage,
    ToolBarSegmentPage,

    DisplayRoutePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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

    FabsBasicPage,

    CardAdvancedMapPage,
    CardAdvancedSocialPage,
    CardAdvancedWeatherPage,
    CardBackgroundPage,
    CardBasicPage,
    CardHeaderPage,
    CardImagePage,
    CardListPage,

    CheckBoxesBasicPage,

    DateTimeBasicPage,

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

    SearchBarBasicPage,

    SegmentBasicPage,

    SelectBasicPage,

    SlidesBasicPage,

    TabsBadgesPage,
    TabsBadgesContent,

    TabsBasicPage,
    TabsBasicContentPage,

    TabsIconPage,
    TabsIconContentPage,

    TabsIconTextPage,
    TabsIconTextContentPage,

    ToastBasicPage,

    ToggleBasicPage,

    ToolBarBasicPage,
    ToolBarButtonsPage,
    ToolBarColorsPage,
    ToolBarColorsPage2,
    ToolBarColorsPage3,
    ToolBarColorsPage4,
    ToolBarSearchbarPage,
    ToolBarSegmentPage
  ],
  providers: []
})
export class AppModule {}
