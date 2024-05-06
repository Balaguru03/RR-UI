import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDCComponent } from './rdc.component';

describe('RDCComponent', () => {
  let component: RDCComponent;
  let fixture: ComponentFixture<RDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RDCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
