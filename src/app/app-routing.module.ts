import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainWindowComponent} from './main-window/main-window.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreBuildingComponent} from './store-building/store-building.component';
import {StoreItemLoadedComponent} from './store-item-loaded/store-item-loaded.component';
import {StoreShelfLoadedComponent} from './store-shelf-loaded/store-shelf-loaded.component';


const routes: Routes = [
  { path: 'store', component: StoreBuildingComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'main', component: MainWindowComponent },
  { path: 'floor', component: MainWindowComponent },
  { path: 'shelf', component: StoreShelfLoadedComponent },
  { path: 'item', component: StoreItemLoadedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
