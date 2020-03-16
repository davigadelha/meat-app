import { ApplicationErroHandler } from './app.error-handler';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';

import { RouterModule, PreloadAllModules } from '@angular/router';
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReviewsComponent,
    MenuComponent,
    MenuItemComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  //{provide: LocationStrategy, useClass: HashLocationStrategy}, 
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},
              {provide: ErrorHandler, useClass: ApplicationErroHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
