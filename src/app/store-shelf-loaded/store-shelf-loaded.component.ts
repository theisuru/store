import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
    selector: 'app-store-shelf-loaded',
    templateUrl: './store-shelf-loaded.component.html',
    styleUrls: ['./store-shelf-loaded.component.scss']
})
export class StoreShelfLoadedComponent implements OnInit {
    @Input() items: Item[];

    constructor() {
    }

    ngOnInit() {
    }

}
