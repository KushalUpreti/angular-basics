import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  images: { image_name: ''; image_src: '' }[] = [];

  addImage = (data: { image_name: ''; image_src: '' }) => {
    this.images.push(data);
  };

  getImage = (name: string) => {
    let data = this.images.filter((image) => image.image_name === name);
    return data;
  };
}
