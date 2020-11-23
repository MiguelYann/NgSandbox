import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseContentComponent } from './collapse-content.component';

describe('ToogleContentComponent', () => {
  let component: CollapseContentComponent;
  let fixture: ComponentFixture<CollapseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
