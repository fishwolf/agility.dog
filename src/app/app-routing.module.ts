import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResultsComponent } from './results/results.component';
import { EventinsertComponent } from './eventinsert/eventinsert.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'event_insert', component: EventinsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
