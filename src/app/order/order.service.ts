import { LoginService } from './../security/login/login.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';

import { MEAT_API } from 'app/app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient,
                private loginService: LoginService) {}

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    checkOrder(order: Order): Observable<string> {
        let headers = new HttpHeaders();
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
            console.log('HEADER Authorization: ' + headers.get('Authorization'));
        }
        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                        .map(order => order.id);
            
        // JSON.stringify(order),
            
            // new RequestOptions({headers: headers}))
            // .map(response=> response.json())
            
    }

    clear(){
        this.cartService.clear();
    }
}