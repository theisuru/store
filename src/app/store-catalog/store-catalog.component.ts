import {Component, Input, OnInit} from '@angular/core';
import {Facet} from '../item';

@Component({
  selector: 'app-store-catalog',
  templateUrl: './store-catalog.component.html',
  styleUrls: ['./store-catalog.component.scss']
})
export class StoreCatalogComponent implements OnInit {
  @Input() facets: Facet[];

  constructor() { }

  ngOnInit() {
  }

}
