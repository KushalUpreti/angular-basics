import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDataGrid } from 'src/app/interfaces/IDataGrid.interface';
import { PeriodicTableService } from 'src/app/services/periodic-table.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})
export class PeriodicTableComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private readonly periodicTableService: PeriodicTableService
  ) {}

  periodicElements: IDataGrid[] = [];

  columnHeader = {
    id: 'ID',
    element: 'Element',
    weight: 'Weight',
    symbol: 'Symbol',
  };

  ngOnInit(): void {
    this.http
      .get<IDataGrid[]>(' http://localhost:3000/elements')
      .subscribe((elements) => {
        this.periodicElements = elements;
      });
  }

  addElement(): void {
    const el: IDataGrid = {
      id: 11,
      element: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
    };
    this.periodicTableService.addElement(el);
  }
}
