import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events.component';

const eventsRoutes: Routes = [
  {path:'events', component: EventsComponent},
  {path:'new', component: EventFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
