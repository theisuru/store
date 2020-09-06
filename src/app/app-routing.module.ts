import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainWindowComponent} from './main-window/main-window.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreBuildingComponent} from './store-building/store-building.component';
import {StoreItemLoadedComponent} from './store-item-loaded/store-item-loaded.component';
import {StoreShelfLoadedComponent} from './store-shelf-loaded/store-shelf-loaded.component';
import {StoreFloorComponent} from './store-floor/store-floor.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {BasketComponent} from './basket/basket.component';
import {AccountComponent} from './account/account.component';
import {OrdersComponent} from './orders/orders.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'main', component: MainWindowComponent},
    {path: 'floor', component: StoreFloorComponent},
    {path: 'shelf', component: StoreBuildingComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'basket', component: BasketComponent},
    {path: 'account', component: AccountComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'item', component: StoreItemLoadedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
