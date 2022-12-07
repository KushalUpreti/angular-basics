import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialDirective } from './directives/special.directive';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [AppComponent, SpecialDirective, HeaderComponent, PagenotfoundComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
