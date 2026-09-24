import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categorizeproduct } from './categorizeproduct';

describe('Categorizeproduct', () => {
  let component: Categorizeproduct;
  let fixture: ComponentFixture<Categorizeproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Categorizeproduct],
    }).compileComponents();

    fixture = TestBed.createComponent(Categorizeproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
