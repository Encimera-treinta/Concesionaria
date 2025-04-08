import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetallesComponent } from './auto-detalles.component';

describe('AutoDetallesComponent', () => {
  let component: AutoDetallesComponent;
  let fixture: ComponentFixture<AutoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
