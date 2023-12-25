import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPagePracticeComponent } from './pages/main-page-practice.component';
import { AddCharacterComponent } from './components/characters/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/characters/list/list.component';
import { AddTypeCharacterComponent } from './components/types-characters/add-type-character/add-type-character.component';
import { ListTypeCharacterComponent } from './components/types-characters/list-type-character/list-type-character.component';

@NgModule({
  declarations: [
    DbzMainPagePracticeComponent,
    AddCharacterComponent,
    ListComponent,
    AddTypeCharacterComponent,
    ListTypeCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainPagePracticeComponent
  ]
})

export class DbzPracticeModule { }


