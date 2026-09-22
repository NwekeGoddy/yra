import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oppurtunities } from './oppurtunities';

describe('Oppurtunities', () => {
  let component: Oppurtunities;
  let fixture: ComponentFixture<Oppurtunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oppurtunities],
    }).compileComponents();

    fixture = TestBed.createComponent(Oppurtunities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
