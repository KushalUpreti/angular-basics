import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  cardList = [
    { id: 1, title: 'One' },
    { id: 2, title: 'Two' },
    { id: 3, title: 'Three' },
    { id: 4, title: 'Four' },
  ];

  deleteCard = (id: number) => {
    const newArray = this.cardList.filter((card) => card.id !== id);
    this.cardList = [...newArray];
  };
}
export class AppComponent {}

