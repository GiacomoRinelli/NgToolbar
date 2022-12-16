import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTypesComponent } from './global-types.component';

describe('GlobalTypesComponent', () => {
  let component: GlobalTypesComponent;
  let fixture: ComponentFixture<GlobalTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
