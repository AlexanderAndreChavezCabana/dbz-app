import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeCharacterComponent } from './add-type-character.component';

describe('AddTypeCharacterComponent', () => {
  let component: AddTypeCharacterComponent;
  let fixture: ComponentFixture<AddTypeCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTypeCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTypeCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
