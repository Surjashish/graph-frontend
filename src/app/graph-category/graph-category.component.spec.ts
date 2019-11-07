import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCategoryComponent } from './graph-category.component';

describe('GraphCategoryComponent', () => {
  let component: GraphCategoryComponent;
  let fixture: ComponentFixture<GraphCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
