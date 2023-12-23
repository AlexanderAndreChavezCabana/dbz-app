import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html', // Tecnicamente esta fuera, entonces los private no podrán ser utilizados
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;


  get capitalizeName(): string { // Son propiedades
    return this.name.toUpperCase();
  }

  getHeroDescription(): string { // Los metodos se utilizan con parentesis
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( value: string ): void {
    this.name = value;
  }

  changeAge( value: number ): void {
    this.age = value;
  }

  // resetForm ( name: string, age: number ): void {
  //   this.name = name;
  //   this.age = age;
  // }

  resetForm (): void {
    this.name = 'ironman';
    this.age = 40;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }
}
