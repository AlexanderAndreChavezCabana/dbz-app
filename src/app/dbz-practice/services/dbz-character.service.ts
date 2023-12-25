import { Injectable } from '@angular/core';
import { DbzCharacterPractice } from '../interfaces/dbz-character.practice.model';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class dbzCharacterService {
  constructor() { }

  // ----------------------- CHARACTER ------------------------
  public dbzCharactersPractice: DbzCharacterPractice[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 7000
    },
    {
      id: uuid(),
      name: 'Frieza',
      power: 18000
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 16000
    },

  ]

  // onChangeCharacter ( character: DbzCharacterPractice ): void { // Recibiendo Character
    // console.log("Main");
    // console.log("Recibido desde el padre");
    // console.log(character);
    // this.dbzCharactersPractice.push(character);
  // }

  onChangeCharacter ( character: DbzCharacterPractice ): void {
    const newCharacter: DbzCharacterPractice = {
      ...character, id: uuid()
    }
    this.dbzCharactersPractice.push(newCharacter);
  }

  // DELETE FIRST FORM
  // onDeleteCharacter ( id: number ): void {
  //   this.dbzCharactersPractice.splice(id, 1);
  // }

  // DELETE SECOND FORM
  onDeleteCharacter ( id?: string ): void {
    this.dbzCharactersPractice = this.dbzCharactersPractice.filter( character => character.id !== id);
  }

}
