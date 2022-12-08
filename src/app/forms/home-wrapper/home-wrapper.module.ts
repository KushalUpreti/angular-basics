import { NgModule } from '@angular/core';
import { HomeWrapperComponent } from './home-wrapper.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [{ path: '', component: HomeWrapperComponent }];

@NgModule({
  declarations: [HomeWrapperComponent, HomeComponent],
  imports: [MaterialModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeWrapperModule {}
