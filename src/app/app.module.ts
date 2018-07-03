import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StayComponent } from './stay/stay.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StayComponent,
    FlightComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
