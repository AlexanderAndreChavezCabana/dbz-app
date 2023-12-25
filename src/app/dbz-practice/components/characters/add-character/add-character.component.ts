import { Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacterPractice } from '../../../interfaces/dbz-character.practice.model';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<DbzCharacterPractice> = new EventEmitter();

  public dbzCharacter: DbzCharacterPractice = {
    name: '',
    power: 0
  };

  emitCharacter (): void { // Emitir Character
    if ( this.dbzCharacter.name.length === 0 || this.dbzCharacter.power <= 0) return;
    // console.log(this.dbzCharacter);
    this.onNewCharacter.emit(this.dbzCharacter); // Esto y la interface debe coincidir con los datos que se le envie al padre
    // this.dbzCharacter.name = '';
    // this.dbzCharacter.power = 0;

    // Instanciando y dando nuevo valor al objeto
    this.dbzCharacter = { name: '', power: 0}
    }



}
