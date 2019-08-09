import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events.component';
import { GuestFormComponent } from './guest/guest-form/guest-form.component';

const eventsRoutes: Routes = [
  {path:'', component: EventsComponent},
  {path:'new', component: EventFormComponent},
  {path:'guest', component: GuestFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
