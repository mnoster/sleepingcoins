import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoingraphComponent } from './coingraph.component';

describe('CoingraphComponent', () => {
  let component: CoingraphComponent;
  let fixture: ComponentFixture<CoingraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoingraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoingraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
