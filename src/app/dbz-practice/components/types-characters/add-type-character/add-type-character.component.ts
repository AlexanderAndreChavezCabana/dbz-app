import { Component, EventEmitter, Output } from '@angular/core';
import { TypeCharacter } from '../../../interfaces/types-character.models';

@Component({
  selector: 'app-dbz-add-type-character',
  templateUrl: './add-type-character.component.html',
  styleUrl: './add-type-character.component.css'
})
export class AddTypeCharacterComponent {

  @Output()
  public onNewTypeCharacter: EventEmitter<TypeCharacter> = new EventEmitter();

  @Output()
  public onDeleteTypeCharacter: EventEmitter<number> = new EventEmitter();

  public typeCharacter: TypeCharacter = {
    name: '',
    planet: ''
  };

  emitTypeCharacter(): void {
    // console.log("From children");
    if ( this.typeCharacter.name.length === 0 || this.typeCharacter.planet.length === 0) return;
    // console.log(this.typeCharacter); // From Children
    this.onNewTypeCharacter.emit(this.typeCharacter);
    this.typeCharacter = { name: '', planet: '' };
    // this.typeCharacter.name = '';
    // this.typeCharacter.planet = '';
  }

  emitIdCharacter( id: number ): void {
    this.onDeleteTypeCharacter.emit(id);
  }



}
