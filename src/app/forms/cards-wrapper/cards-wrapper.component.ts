import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
  styleUrls: ['./cards-wrapper.component.scss'],
})
export class CardsWrapperComponent {
  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  addCard(title: string) {
    this.cardsTitle.push(title);
  }
}
