import { Component, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { ApiService, NotificationService } from '@core/services';
import { Item } from '@shared/models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemListComponent implements AfterViewInit {
  displayedColumns = ['createdAt', 'name', 'email', 'value', 'values', 'result'];
  dataSource = new MatTableDataSource();
  isLoadingResults = false;

  constructor(private apiService: ApiService, private notificationService: NotificationService) {}

  ngAfterViewInit() {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.apiService.get(`items?sort=-createdAt`);
        }),
        map((items: Item[]) => {
          console.log(items);
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          return items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.notificationService.showMessage('Ha ocurrido un error', {
            closeText: 'Cerrar',
            link: null,
            duration: 5000,
          });
          return observableOf([]);
        })
      )
      .subscribe((items: Item[]) => (this.dataSource.data = items as Item[]));
  }
}
