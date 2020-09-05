import {Component, OnInit} from '@angular/core';
import {Facet, Filter, Item} from '../item';
import {ItemSearchService} from '../item-search.service';

@Component({
    selector: 'app-store-floor',
    templateUrl: './store-floor.component.html',
    styleUrls: ['./store-floor.component.scss']
})
export class StoreFloorComponent implements OnInit {
    floorName: string;
    facets: Facet[];
    featuredItems: Item[];
    bestSellerItems: Item[];
    recommendedItems: Item[];

    constructor(private itemSearchService: ItemSearchService) {
    }

    ngOnInit() {
        this.floorName = 'Fiction';
        this.getItems('', []);
        this.getFacets('', []);
    }

    getItems(searchTerm: string, filters: Filter[]): void {
        this.itemSearchService.getItems(searchTerm, filters).subscribe(page => this.featuredItems = page.items.slice(0, 6));
        this.itemSearchService.getItems(searchTerm, filters).subscribe(page => this.bestSellerItems = page.items.slice(0, 6));
        this.itemSearchService.getItems(searchTerm, filters).subscribe(page => this.recommendedItems = page.items.slice(0, 6));
    }

    getFacets(searchTerm: string, filters: Filter[]): void {
        this.itemSearchService.getFacets(searchTerm, filters).subscribe(facets => this.facets = facets);
    }

}
