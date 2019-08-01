import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
//import { RouterModule } from '@angular/router';


import { EventFormComponent } from './event-form/event-form.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationService } from 'src/app/services/localization.service';



@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
        FormsModule,
        ReactiveFormsModule      
    ],
    exports: [],
    declarations: [
        EventsComponent,
        EventFormComponent,
        EventPreviewComponent        
    ],
    providers: [
        LocalizationService
    ],
})

export class EventsModule{}