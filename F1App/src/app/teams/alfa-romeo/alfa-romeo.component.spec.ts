import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaRomeoComponent } from './alfa-romeo.component';

describe('AlfaRomeoComponent', () => {
  let component: AlfaRomeoComponent;
  let fixture: ComponentFixture<AlfaRomeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaRomeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfaRomeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
