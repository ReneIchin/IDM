import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMiembrosComponent } from './create-miembros.component';

describe('CreateMiembrosComponent', () => {
  let component: CreateMiembrosComponent;
  let fixture: ComponentFixture<CreateMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMiembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
