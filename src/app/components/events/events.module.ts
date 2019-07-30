import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
//import { RouterModule } from '@angular/router';


import { EventFormComponent } from './event-form/event-form.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
         FormsModule
        
    ],
    exports: [],
    declarations: [
        EventsComponent,
        EventFormComponent,
        EventPreviewComponent
    ],
    providers: [],
})

export class EventsModule{}