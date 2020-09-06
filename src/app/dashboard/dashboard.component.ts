import { Component, OnInit } from '@angular/core';
import {Facet, Filter, Item} from '../item';
import {ItemSearchService} from '../item-search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    title: string;
    facets: Facet[];
    featuredItems: Item[];
    bestSellerItems: Item[];
    recommendedItems: Item[];

    constructor(private itemSearchService: ItemSearchService) {
    }

    ngOnInit() {
        this.title = 'Your one-stop bookshop';
        // this.title = 'A reader lives a thousand lives before he dies';
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
