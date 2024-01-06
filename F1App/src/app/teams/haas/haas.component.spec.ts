import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaasComponent } from './haas.component';

describe('HaasComponent', () => {
  let component: HaasComponent;
  let fixture: ComponentFixture<HaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
