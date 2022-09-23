import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUrlTableComponent } from './my-url-table.component';

describe('MyUrlTableComponent', () => {
  let component: MyUrlTableComponent;
  let fixture: ComponentFixture<MyUrlTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUrlTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUrlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
