import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  likeCount: number = 0;
  imageUrl: string =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';

  @Input() title: string;

  onLike(): void {
    this.likeCount++;
  }
}
