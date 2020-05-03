import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemLoadedComponent } from './store-item-loaded.component';

describe('StoreItemLoadedComponent', () => {
  let component: StoreItemLoadedComponent;
  let fixture: ComponentFixture<StoreItemLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreItemLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
