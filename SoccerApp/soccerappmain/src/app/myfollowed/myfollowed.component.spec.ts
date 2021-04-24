import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowedComponent } from './myfollowed.component';

describe('MyFollowedComponent', () => {
  let component: MyFollowedComponent;
  let fixture: ComponentFixture<MyFollowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFollowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
