import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CursitoComponent } from './cursito/cursito.component';
import { AutoresComponent } from './autores.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CursitoComponent,
    AutoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
