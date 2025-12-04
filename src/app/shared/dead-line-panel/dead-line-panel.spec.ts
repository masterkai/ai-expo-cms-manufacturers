import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadLinePanel } from './dead-line-panel';

describe('DeadLinePanel', () => {
  let component: DeadLinePanel;
  let fixture: ComponentFixture<DeadLinePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadLinePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadLinePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
