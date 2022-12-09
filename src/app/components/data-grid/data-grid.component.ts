import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IDataGrid } from 'src/app/interfaces/IDataGrid.interface';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  @Input() tableData: IDataGrid[] = [];
  @Input() columnHeader: { [key: string]: string | number } = {};
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  goToItemDetails(data: IDataGrid): void {
    this.router
      .navigate(['item-details', data.id], {
        state: { data },
        relativeTo: this.route,
      })
      .then();
  }

  ngOnChanges(changes: SimpleChange): void {
    if (
      changes['tableData']?.currentValue?.length !==
      changes['tableData']?.previousValue?.length
    ) {
      this.dataSource = new MatTableDataSource(this.tableData);
    }
  }
}
