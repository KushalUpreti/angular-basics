import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss'],
})
export class AddImageComponent {
  @Input() addImage: any;

  image_name = '';
  image_src = '';

  imageNameHandler(event: any) {
    let input = event.target.value;
    this.image_name = input;
  }

  imageSrcHandler(event: any) {
    let input = event.target.value;
    this.image_src = input;
  }

  addHandler(event: Event) {
    event.preventDefault();
    if (!this.image_name || !this.image_src) {
      alert('Enter valid image data');
      return;
    }
    this.addImage({ image_name: this.image_name, image_src: this.image_src });
    this.image_name = '';
    this.image_src = '';
  }
}
