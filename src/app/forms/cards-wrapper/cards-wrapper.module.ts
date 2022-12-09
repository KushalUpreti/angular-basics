import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from '../../components/cards/cards.component';
import { MaterialModule } from '../../material/material.module';
import { CardsWrapperComponent } from './cards-wrapper.component';

const routes: Routes = [{ path: '', component: CardsWrapperComponent }];

@NgModule({
  declarations: [CardsWrapperComponent, CardsComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class CardsWrapperModule {}
