import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideModalModule } from './side-modal/side-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
