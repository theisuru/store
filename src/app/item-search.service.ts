import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Facet, Filter, Item, Page} from './item';
import {NotificationService} from './notification.service';


@Injectable({
    providedIn: 'root'
})
export class ItemSearchService {

    items = [
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: '/assets/img/holmes.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Harry Potter', price: 'Rs. 200.75', description: 'Children book', image: '/assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Games of thrones', price: 'Rs. 500.00', description: 'Fantasy book', image: '/assets/img/got.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: '/assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: '/assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: '/assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        }];

    floors = [{name: 'Children Books', items: this.items},
        {name: 'Academic', items: this.items},
        {name: 'Novel', items: this.items}];

    facets = [
        {
            name: 'Rating',
            records: [{name: '5 Stars', count: 200}, {name: '4 Stars', count: 100}, {name: '3 Stars', count: 50}]
        },
        {
            name: 'Language',
            records: [{name: 'English', count: 200}, {name: 'Sinhala', count: 100}, {name: 'Tamil', count: 50}]
        },
        {
            name: 'Genre',
            records: [{name: 'Fiction', count: 200}, {name: 'Education', count: 100}, {name: 'Young adults', count: 50}]
        },
        {
            name: 'Price',
            records: [{name: 'Rs. 500', count: 200}, {name: 'Rs. 300', count: 100}, {name: 'Rs. 100', count: 50}]
        }];

    constructor(private notificationService: NotificationService) {
    }

    getItems(searchTerm: string, filters: Filter[]): Observable<Page> {
        const page = new Page(this.items);
        page.term = searchTerm;
        page.filters = filters;
        return of(page);
    }

    getFacets(searchTerm: string, filters: Filter[]): Observable<Facet[]> {
        return of(this.facets);
    }
}
