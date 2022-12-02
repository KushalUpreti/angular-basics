import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss'],
})
export class ViewImageComponent {
  @Input() getImage: any;

  image_name = '';
  image_src = '';

  imageNameHandler(event: any) {
    this.image_name = event.target.value;
  }

  viewHandler(event: Event) {
    event.preventDefault();
    if (!this.image_name) {
      alert('Enter valid name!!');
      return;
    }
    let imageObj = this.getImage(this.image_name);
    if (imageObj.length) {
      this.image_src = imageObj[0].image_src;
    }
  }
}
