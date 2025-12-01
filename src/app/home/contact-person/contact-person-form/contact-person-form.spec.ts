import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonForm } from './contact-person-form';

describe('ContactPersonForm', () => {
  let component: ContactPersonForm;
  let fixture: ComponentFixture<ContactPersonForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPersonForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPersonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
