import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.model';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteIdCharacter: EventEmitter<string> = new EventEmitter();

  @Input() // Puede recibir una property characterList
  public characterList: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 8500
    },
    {
      name: 'Vegeta',
      power: 8000
    },
    {
      name: 'Picollo',
      power: 5000
    }
  ]

  onHandlerDeleteIdCharacter( id?: string ): void {
    this.onDeleteIdCharacter.emit(id);
  }

  // onHandlerID ( id: number ): void {
  //   this.characterList.splice(id, 1);
  //   console.log(this.characterList);
  // }
};

