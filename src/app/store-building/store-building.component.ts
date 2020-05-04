import {Component, OnInit} from '@angular/core';
import {ItemSearchService} from '../item-search.service';
import {Item} from '../item';

@Component({
    selector: 'app-store-building',
    templateUrl: './store-building.component.html',
    styleUrls: ['./store-building.component.scss']
})
export class StoreBuildingComponent implements OnInit {
    items: Item[];

    constructor(private itemSearchService: ItemSearchService) {
    }

    ngOnInit() {
      this.getItems('');
    }

    getItems(searchTerm: string): void {
        this.itemSearchService.getItems().subscribe(items => this.items = items);
    }

}
