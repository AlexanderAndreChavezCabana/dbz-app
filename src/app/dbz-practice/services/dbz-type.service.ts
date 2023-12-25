import { Injectable } from '@angular/core';
import { TypeCharacter } from '../interfaces/types-character.models';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzTypeService {
  constructor() { }

    // ----------------------- TYPES ------------------------

    public typesCharacter: TypeCharacter[] = [
      {
        id: uuid(),
        name: "Saiyan",
        planet: "Vegeta"
      },
      {
        id: uuid(),
        name: "Earthling",
        planet: "Earth"
      },
      {
        id: uuid(),
        name: "Frieza",
        planet: "Freezer N° 79"
      },
      {
        id: uuid(),
        name: 'Hit-Monkey',
        planet: 'Unknown'
      },
      {
        id: uuid(),
        name: 'Gris',
        planet: 'Bath'
      }
    ]

    // onChangeTypeCharacter ( typeCharacter: TypeCharacter ): void {
      // console.log("At in father");
      // console.log(typeCharacter);
      // this.typesCharacter.push(typeCharacter);
    // }

    onChangeTypeCharacter ( typeCharacter: TypeCharacter ): void {
      const newTypeCharacter: TypeCharacter = {
        ...typeCharacter, id: uuid()
      }

      this.typesCharacter.push(newTypeCharacter);
    }

    // onDeleteTypeCharacter ( id: number ): void {
    //   console.log("From Father");
    //   this.typesCharacter.splice(id, 1);
    // }

    onDeleteTypeCharacter ( id?: string ): void {
      this.typesCharacter = this.typesCharacter.filter( typeCharacter => typeCharacter.id !== id);
    }

}
