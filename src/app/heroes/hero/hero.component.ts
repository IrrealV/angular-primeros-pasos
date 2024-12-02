import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  /*  public showAgeButton: boolean = true;
  public showNameButton: boolean = true; */

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    /*this.showNameButton = false; */
  }

  changeAge(): void {
    this.age = 25;
    /* this.showAgeButton = false; */
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
