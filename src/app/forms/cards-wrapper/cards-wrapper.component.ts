import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
  styleUrls: ['./cards-wrapper.component.css'],
})
export class CardsWrapperComponent {
  cardTitles: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  currentTitle: '';

  addCard() {
    if (!this.currentTitle) {
      return;
    }
    this.cardTitles.push(this.currentTitle);
    this.currentTitle = '';
  }
}
