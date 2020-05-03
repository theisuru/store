import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFloorComponent } from './store-floor.component';

describe('StoreFloorComponent', () => {
  let component: StoreFloorComponent;
  let fixture: ComponentFixture<StoreFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
