import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacterPractice } from '../../../interfaces/dbz-character.practice.model';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public dbzCharacterList: DbzCharacterPractice[] = [
    {
      name: 'Alexander',
      power: 30
    },
    {
      name: 'Vegeta',
      power: 9000
    }
  ];



  // onDeleteCharacter ( id: number ): void {
  //   this.dbzCharacterList.splice(id, 1);
  // }

  // FIRST FORM
  // onHandlerCharacter ( id: number ): void {
  //   console.log("From children character")
  //   this.onDeleteCharacter.emit(id);
  //   console.log({ 'index character': id });
  // }

  // SECOND FORM
  onHandlerCharacter ( id?: string ): void {
    this.onDeleteCharacter.emit(id);
    console.log(id);
  }

}
