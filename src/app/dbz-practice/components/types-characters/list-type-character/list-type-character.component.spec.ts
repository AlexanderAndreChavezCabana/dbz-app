import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeCharacterComponent } from './list-type-character.component';

describe('ListTypeCharacterComponent', () => {
  let component: ListTypeCharacterComponent;
  let fixture: ComponentFixture<ListTypeCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTypeCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTypeCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
