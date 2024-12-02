import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'DeadPool',
    'Wolverine',
  ];

  public removedHero?: string;

  removeLastHero(): void {
    this.removedHero = this.heroNames.pop();
  }
}
