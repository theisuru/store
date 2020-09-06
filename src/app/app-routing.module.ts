import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainWindowComponent} from './main-window/main-window.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreBuildingComponent} from './store-building/store-building.component';
import {StoreItemLoadedComponent} from './store-item-loaded/store-item-loaded.component';
import {StoreShelfLoadedComponent} from './store-shelf-loaded/store-shelf-loaded.component';
import {StoreFloorComponent} from './store-floor/store-floor.component';


const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'store', component: StoreBuildingComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'main', component: MainWindowComponent},
    {path: 'floor', component: StoreFloorComponent},
    {path: 'shelf', component: StoreShelfLoadedComponent},
    {path: 'item', component: StoreItemLoadedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
