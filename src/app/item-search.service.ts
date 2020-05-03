import {Injectable} from '@angular/core';

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

    constructor() {
    }

    getItems() {
        return this.items;
    }
}
