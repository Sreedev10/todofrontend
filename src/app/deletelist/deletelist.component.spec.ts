import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelistComponent } from './deletelist.component';

describe('DeletelistComponent', () => {
  let component: DeletelistComponent;
  let fixture: ComponentFixture<DeletelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
