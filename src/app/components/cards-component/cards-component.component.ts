import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss'],
})
export class CardsComponentComponent {
  @Input() cardList: any = [];

  @Output() idEvent$ = new EventEmitter<number>();

  onDeleteClick = (id: number) => {
    this.idEvent$.emit(id);
  };
}
