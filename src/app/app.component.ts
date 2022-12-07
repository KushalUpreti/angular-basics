import { Component } from '@angular/core';
import { PeriodicElement } from './interfaces/PeriodicElement.interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}

  onClick() {
    this.authService.login('username', 'password');
  }
}
