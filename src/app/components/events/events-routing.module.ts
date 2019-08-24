import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events.component';
import { GuestFormComponent } from './guest/guest-form/guest-form.component';
import { EventResolverGuard } from 'src/app/guards/event-resolver.guard';

const eventsRoutes: Routes = [
  { path: '', component: EventsComponent },
  {
    path: 'new', component: EventFormComponent,
    // resolve: {
    //   event: EventResolverGuard
    // }
  },
  {
    path: 'edit', component: EventFormComponent,
    //path: 'edit/:id', component: EventFormComponent,
    // resolve: {
    //   event: EventResolverGuard
    // }
  },
  { path: 'guest', component: GuestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
