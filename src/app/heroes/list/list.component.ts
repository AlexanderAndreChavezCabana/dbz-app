import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName: string[] = ['Captain America', 'Iron Man', 'Hulk', 'Thor'];
  public deletedHeroes?: string;
  public listDeletedHeroes: string[] = [];

  removeLastHero(): void {
    this.deletedHeroes = this.heroesName.pop();
    // this.listDeletedHeroes?.push(heroDeleted!);
    this.listDeletedHeroes?.push(this.deletedHeroes!);
  }

}
