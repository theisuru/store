import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Item} from './item';
import {NotificationService} from './notification.service';

@Injectable({
    providedIn: 'root'
})
export class ItemSearchService {

    items = [{name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'},
        {name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'},
        {name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'},
        {name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'},
        {name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'},
        {name: 'Sherlock Holmes', price: 100.50, description: 'Detective book'}];

    floors = [{name: 'Children Books', shelves: [{name: 'General', items: []}]},
        {floorName: 'Academic', shelves: [{name: 'Mathematics', items: []}]},
        {floorName: 'Novel', shelves: [{name: 'Fiction', items: this.items}]}];

    constructor(private notificationService: NotificationService) {
    }

    getItems(): Observable<Item[]> {
        return of(this.items);
    }
}
