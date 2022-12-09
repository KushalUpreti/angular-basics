import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { ConfigService } from './config.service';
import { IDataGrid } from '../interfaces/IDataGrid.interface';

@Injectable()
export class PeriodicTableService {
  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {}

  addElement(element: IDataGrid): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .post('http://localhost:3000/elements', element, { headers })
      .pipe(
        retry(3),
        catchError((e) => this.configService.handleError(e))
      )
      .subscribe();
  }
}
