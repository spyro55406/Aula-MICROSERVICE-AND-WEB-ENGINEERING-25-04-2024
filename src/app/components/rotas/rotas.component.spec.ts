import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasComponent } from './rotas.component';

describe('RotasComponent', () => {
  let component: RotasComponent;
  let fixture: ComponentFixture<RotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
