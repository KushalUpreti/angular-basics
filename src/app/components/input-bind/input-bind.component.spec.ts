import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindComponent } from './input-bind.component';

describe('InputBindComponent', () => {
  let component: InputBindComponent;
  let fixture: ComponentFixture<InputBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
