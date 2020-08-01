import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataGindingComponent } from './two-way-data-ginding.component';

describe('TwoWayDataGindingComponent', () => {
  let component: TwoWayDataGindingComponent;
  let fixture: ComponentFixture<TwoWayDataGindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataGindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataGindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
