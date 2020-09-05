import {Component, OnInit} from '@angular/core';
import {ItemSearchService} from '../item-search.service';
import {Facet, Filter, Item} from '../item';

@Component({
    selector: 'app-store-building',
    templateUrl: './store-building.component.html',
    styleUrls: ['./store-building.component.scss']
})
export class StoreBuildingComponent implements OnInit {
    items: Item[];
    facets: Facet[];

    constructor(private itemSearchService: ItemSearchService) {
    }

    ngOnInit() {
        this.getItems('', []);
        this.getFacets('', []);
    }

    getItems(searchTerm: string, filters: Filter[]): void {
        this.itemSearchService.getItems(searchTerm, filters).subscribe(page => this.items = page.items);
    }

    getFacets(searchTerm: string, filters: Filter[]): void {
        this.itemSearchService.getFacets(searchTerm, filters).subscribe(facets => this.facets = facets);
    }

    getDisplayModel(): string {
        return 'shelf';
    }

}
