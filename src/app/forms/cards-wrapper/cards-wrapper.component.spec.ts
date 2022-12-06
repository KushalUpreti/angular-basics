import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWrapperComponent } from './cards-wrapper.component';

describe('CardsWrapperComponent', () => {
  let component: CardsWrapperComponent;
  let fixture: ComponentFixture<CardsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
