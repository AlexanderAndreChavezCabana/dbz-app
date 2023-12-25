import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.model';
import { v4 as uuid } from 'uuid';

// console.log(uuid());


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor ( ) {

  }


  public characters: Character[] = [
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
  ];

  onNewCharacter( character: Character ): void  {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);

    // console.log("MAIN");
    // console.log(character);
  }

  // onDeleteCharacter ( id: number ): void {
  //   this.characters.splice(id, 1);
  //   console.log(this.characters);
  // }

  onDeleteCharacter ( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
