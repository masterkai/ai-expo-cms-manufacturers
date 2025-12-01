import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCard } from './name-card';

describe('NameCard', () => {
  let component: NameCard;
  let fixture: ComponentFixture<NameCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
