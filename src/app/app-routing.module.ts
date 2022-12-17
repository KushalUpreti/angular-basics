import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () =>
      import('./forms/cards-wrapper/cards-wrapper.module').then(
        (m) => m.CardsWrapperModule
      ),
  },
  {
    path: 'periodic-table',
    loadChildren: () =>
      import('./forms/periodic-table/periodic-table.module').then(
        (m) => m.PeriodicTableModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
