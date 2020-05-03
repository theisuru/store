import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreShelfLoadedComponent } from './store-shelf-loaded.component';

describe('StoreShelfLoadedComponent', () => {
  let component: StoreShelfLoadedComponent;
  let fixture: ComponentFixture<StoreShelfLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreShelfLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreShelfLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
