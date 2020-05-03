import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreShelfComponent } from './store-shelf.component';

describe('StoreShelfComponent', () => {
  let component: StoreShelfComponent;
  let fixture: ComponentFixture<StoreShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
