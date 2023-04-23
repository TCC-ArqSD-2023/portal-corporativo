import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AderirPlanoComponent } from './aderir-plano.component';

describe('AderirPlanoComponent', () => {
  let component: AderirPlanoComponent;
  let fixture: ComponentFixture<AderirPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AderirPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AderirPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
