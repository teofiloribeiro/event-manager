import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'events', 
    loadChildren: 'src/app/components/events/events.module#EventsModule',
    canActivate: [AuthGuard]
  },
  {path:'', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
