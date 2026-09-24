import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Customerlistcallhttpservice } from './customerlistcallhttpservice';

describe('Customerlistcallhttpservice', () => {
  let component: Customerlistcallhttpservice;
  let fixture: ComponentFixture<Customerlistcallhttpservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerlistcallhttpservice],
    }).compileComponents();

    fixture = TestBed.createComponent(Customerlistcallhttpservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
