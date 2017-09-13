import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxPivotGridComponent } from '../../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxPivotGridComponent],
    exports: [jqxPivotGridComponent],
})
export class PivotGridModule { }

