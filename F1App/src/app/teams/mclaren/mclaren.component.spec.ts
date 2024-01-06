import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenComponent } from './mclaren.component';

describe('MclarenComponent', () => {
  let component: MclarenComponent;
  let fixture: ComponentFixture<MclarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MclarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
