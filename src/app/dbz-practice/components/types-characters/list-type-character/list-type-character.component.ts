import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeCharacter } from '../../../interfaces/types-character.models';

@Component({
  selector: 'app-dbz-list-type-character',
  templateUrl: './list-type-character.component.html',
  styleUrl: './list-type-character.component.css'
})
export class ListTypeCharacterComponent {

  @Output()
  public onDeleteTypeCharacter: EventEmitter<string> = new EventEmitter();

  // @Output()
  // public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public typeCharacter: TypeCharacter[] = [
    {
      name: "Saiyan",
      planet: "Vegeta"
    },
    {
      name: "Namekiano",
      planet: "Namekusei"
    }
  ];


  // onDeleteTypeCharacter ( id: number ): void {
  //   this.typeCharacter.splice( id, 1);
  // }

  // onHandlerTypeCharacter ( id: number ): void {
  //   console.log("From children");
  //   console.log({ 'index': id });
  //   this.onDeleteTypeCharacter.emit(id);
  // }

  // onHandlerCharacter ( id: number ): void {
  //   this.onDeleteCharacter.emit(id);
  // }

  onHandlerTypeCharacter ( id?: string ): void {
     this.onDeleteTypeCharacter.emit(id);
  }

}
