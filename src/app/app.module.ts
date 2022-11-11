import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { DirectivaDirective } from './directivas/directiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    DirectivaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
