import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    redirectUrl = '/curate';

    constructor() {
    }

    login(username: string, password: string): Observable<any> {
      return of(' ');
    }

    logout(username: string, token: string): Observable<any> {
      return of(' ');
    }

    getBasket(username: string, token: string): Observable<any> {
      return of(' ');
    }

    getOrderHistory(username: string, token: string): Observable<any> {
      return of(' ');
    }

    getAccountDetails(username: string, token: string): Observable<any> {
      return of(' ');
    }

    getWishlist(username: string, token: string): Observable<any> {
      return of(' ');
    }
}
