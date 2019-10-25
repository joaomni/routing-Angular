import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomarModule } from './somar/somar.module';
import { SubtrairModule } from './subtrair/subtrair.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomarModule,
    SubtrairModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
