import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockSearchService {
  static items = [
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/holmes.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Harry Potter', price: 'Rs. 200.75', description: 'Children book', image: 'assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Games of thrones', price: 'Rs. 500.00', description: 'Fantasy book', image: 'assets/img/got.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Games of thrones', price: 'Rs. 500.00', description: 'Fantasy book', image: 'assets/img/got.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/holmes.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Games of thrones', price: 'Rs. 500.00', description: 'Fantasy book', image: 'assets/img/got.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/harry.jpeg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/holmes.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Games of thrones', price: 'Rs. 500.00', description: 'Fantasy book', image: 'assets/img/got.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        },
        {
            name: 'Sherlock Holmes', price: 'Rs. 100.50', description: 'Detective book', image: 'assets/img/holmes.jpg',
            location: '', rating: {stars: 4.5, count: 200}
        }];

    static floors = [{name: 'Children Books', items: MockSearchService.items},
        {name: 'Academic', items: MockSearchService.items},
        {name: 'Novel', items: MockSearchService.items}];

    static facets = [
        {
            name: 'Genre',
            records: [{name: 'Fiction', count: 200}, {name: 'Education', count: 100},
                {name: 'Young adults', count: 50}, {name: 'Science Fiction', count: 50}, {name: 'Romance', count: 50}]
        },
        {
            name: 'Rating',
            records: [{name: '4 Stars & up', count: 200}, {name: '3 Stars & up', count: 100},
                {name: '2 Stars & up', count: 50}, {name: '1 Star & up', count: 50}]
        },
        {
            name: 'Language',
            records: [{name: 'English', count: 200}, {name: 'Sinhala', count: 100}, {name: 'Tamil', count: 50}]
        },
        {
            name: 'Price',
            records: [{name: 'Rs. 5000 & up', count: 200}, {name: 'Rs. 1000 - 5000', count: 100}, {name: 'Rs. 1000 & below', count: 50}]
        }];

  constructor() { }
}
