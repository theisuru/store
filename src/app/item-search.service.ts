import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Facet, Filter, Item, Page} from './item';
import {NotificationService} from './notification.service';
import {HttpClient} from '@angular/common/http';
import {MockSearchService} from './mock-search.service';


@Injectable({
    providedIn: 'root'
})
export class ItemSearchService {
    private searchURL = 'api/items';

    constructor(private http: HttpClient, private notificationService: NotificationService) {
    }

    getItems(searchTerm: string, filters: Filter[]): Observable<Page> {
        const page = new Page(MockSearchService.items);
        page.term = searchTerm;
        page.filters = filters;
        return of(page);
        // return this.http.get<Page>(this.searchURL);
    }

    getFloorItems(floorName: string, searchTerm: string, filters: Filter[]): Observable<Page> {
        const page = new Page(MockSearchService.items);
        page.term = searchTerm;
        page.filters = filters;
        return of(page);
    }

    getFacets(searchTerm: string, filters: Filter[]): Observable<Facet[]> {
        return of(MockSearchService.facets);
    }
}
