import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKeep } from './my-keep';

describe('MyKeep', () => {
  let component: MyKeep;
  let fixture: ComponentFixture<MyKeep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyKeep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyKeep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
