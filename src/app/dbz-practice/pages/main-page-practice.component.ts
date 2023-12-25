import { Component } from '@angular/core';
import { DbzCharacterPractice } from '../interfaces/dbz-character.practice.model';
import { DbzTypeService } from '../services/dbz-type.service';
import { dbzCharacterService } from '../services/dbz-character.service';
import { TypeCharacter } from '../interfaces/types-character.models';

@Component({
  selector: 'app-dbz-main-page-practice',
  templateUrl: './main-page-practice.component.html'
})

export class DbzMainPagePracticeComponent {
  constructor( private dbzTypeService: DbzTypeService, private dbzCharacterService: dbzCharacterService ) {
  }

  // CHARACTERS

  get dbzCharactersPractice(): DbzCharacterPractice[] {
    return [...this.dbzCharacterService.dbzCharactersPractice];
  }

  onChangeCharacter ( character: DbzCharacterPractice ): void {
    return this.dbzCharacterService.onChangeCharacter(character);
  }

  onDeleteCharacter ( id?: string ): void {
    return this.dbzCharacterService.onDeleteCharacter(id);
  }

  // TYPES

  get typesCharacter(): TypeCharacter[] {
    return [...this.dbzTypeService.typesCharacter];
  }

  onChangeTypeCharacter ( typeCharacter: TypeCharacter ): void {
    return this.dbzTypeService.onChangeTypeCharacter(typeCharacter);
  }

  onDeleteTypeCharacter ( id?: string ): void {
    return this.dbzTypeService.onDeleteTypeCharacter(id);
  }
};
