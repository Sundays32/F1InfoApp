import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbullComponent } from './redbull.component';

describe('RedbullComponent', () => {
  let component: RedbullComponent;
  let fixture: ComponentFixture<RedbullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedbullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedbullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
