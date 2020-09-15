import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VirtualcupComponent } from './virtualcup/virtualcup.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResultsComponent } from './results/results.component';
import { EventinsertComponent } from './eventinsert/eventinsert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VirtualcupComponent,
    CalendarComponent,
    ResultsComponent,
    EventinsertComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
