import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpineComponent } from './alpine.component';

describe('AlpineComponent', () => {
  let component: AlpineComponent;
  let fixture: ComponentFixture<AlpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
