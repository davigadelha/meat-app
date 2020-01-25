import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';

import { MEAT_API } from 'app/app.api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

    itemsValue(): number{
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

    checkOrder(order: Order): Observable<string>{
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        .map(order => order.id);
            
        // JSON.stringify(order),
            
            // new RequestOptions({headers: headers}))
            // .map(response=> response.json())
            
    }

    clear(){
        this.cartService.clear();
    }
}