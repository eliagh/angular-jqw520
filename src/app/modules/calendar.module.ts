import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxCalendarComponent } from '../../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxCalendarComponent],
    exports: [jqxCalendarComponent],
})
export class CalendarModule { }

