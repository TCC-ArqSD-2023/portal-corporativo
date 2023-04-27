import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarExameComponent } from './autorizar-exame.component';

describe('AutorizarExameComponent', () => {
  let component: AutorizarExameComponent;
  let fixture: ComponentFixture<AutorizarExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarExameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
