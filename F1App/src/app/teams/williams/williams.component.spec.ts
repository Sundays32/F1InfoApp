import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliamsComponent } from './williams.component';

describe('WilliamsComponent', () => {
  let component: WilliamsComponent;
  let fixture: ComponentFixture<WilliamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilliamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilliamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
