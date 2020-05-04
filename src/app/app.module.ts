import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SecondaryNavComponent} from './secondary-nav/secondary-nav.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MainWindowComponent} from './main-window/main-window.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreItemComponent} from './store-item/store-item.component';
import {StoreShelfComponent} from './store-shelf/store-shelf.component';
import {StoreFloorComponent} from './store-floor/store-floor.component';
import {StoreBuildingComponent} from './store-building/store-building.component';
import {StoreCatalogComponent} from './store-catalog/store-catalog.component';
import {StoreItemLoadedComponent} from './store-item-loaded/store-item-loaded.component';
import {StoreShelfLoadedComponent} from './store-shelf-loaded/store-shelf-loaded.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        SecondaryNavComponent,
        SideNavComponent,
        MainWindowComponent,
        DashboardComponent,
        StoreItemComponent,
        StoreShelfComponent,
        StoreFloorComponent,
        StoreBuildingComponent,
        StoreCatalogComponent,
        StoreItemLoadedComponent,
        StoreShelfLoadedComponent,
        NotificationsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
