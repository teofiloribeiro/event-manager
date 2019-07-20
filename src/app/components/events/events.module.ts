import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
//import { RouterModule } from '@angular/router';


import { EventFormComponent } from './event-form/event-form.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule
    ],
    exports: [],
    declarations: [
        EventFormComponent,
        EventPreviewComponent
    ],
    providers: [],
})

export class EventsModule{}