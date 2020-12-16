import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPractiseReactiveComponent } from './form-practise-reactive.component';

describe('FormPractiseReactiveComponent', () => {
  let component: FormPractiseReactiveComponent;
  let fixture: ComponentFixture<FormPractiseReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPractiseReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPractiseReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
