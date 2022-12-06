import { Component } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  users = [
    { username: 'Abc', address: 'Xyz', age: 12 },
    { username: 'Def', address: 'Xyz', age: 42 },
    { username: 'Ghi', address: 'Xyz', age: 22 },
    { username: 'Jkl', address: 'Xyz', age: 16 },
    { username: 'Mno', address: 'Xyz', age: 19 },
  ];
}
