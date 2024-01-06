import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaTauriComponent } from './alpha-tauri.component';

describe('AlphaTauriComponent', () => {
  let component: AlphaTauriComponent;
  let fixture: ComponentFixture<AlphaTauriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaTauriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaTauriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
