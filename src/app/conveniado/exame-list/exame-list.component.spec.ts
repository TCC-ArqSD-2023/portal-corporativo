import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameListComponent } from './exame-list.component';

describe('ExameListComponent', () => {
  let component: ExameListComponent;
  let fixture: ComponentFixture<ExameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
