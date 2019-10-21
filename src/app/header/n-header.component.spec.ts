import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NHeaderComponent } from './n-header.component';

describe('NHeaderComponent', () => {
  let component: NHeaderComponent;
  let fixture: ComponentFixture<NHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
