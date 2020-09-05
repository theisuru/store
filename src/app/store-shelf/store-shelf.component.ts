import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-store-shelf',
  templateUrl: './store-shelf.component.html',
  styleUrls: ['./store-shelf.component.scss']
})
export class StoreShelfComponent implements OnInit {
  @Input() shelfName: string;
  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
