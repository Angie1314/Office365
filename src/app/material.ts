import { MatButtonModule, 
         MatCheckboxModule,
         MatToolbarModule,
         MatMenuModule,
         MatSidenavModule,
         MatStepperModule,
         MatFormFieldModule,
         MatDividerModule,
         MatInputModule,
         MatProgressBarModule,
         MatRippleModule,
         MatProgressSpinnerModule,
         MatListModule,
       
 } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
    imports: [MatButtonModule,
              MatProgressSpinnerModule,
              MatCheckboxModule, 
              MatToolbarModule,
              MatIconModule, 
              MatMenuModule, 
              MatSidenavModule, 
              MatStepperModule,
              MatFormFieldModule, 
              MatDividerModule, 
              MatCardModule, 
              MatInputModule,
              FormsModule, 
              MatProgressBarModule, 
              MatRippleModule,
              MatListModule,
              MatGridListModule,
              MatDatepickerModule,
            ],

    exports: [MatButtonModule, 
              MatProgressSpinnerModule,
              MatCheckboxModule, 
              MatToolbarModule,
              MatIconModule, 
              MatMenuModule, 
              MatSidenavModule,
              MatStepperModule, 
              MatFormFieldModule, 
              MatDividerModule,
              MatCardModule, 
              MatInputModule,
              FormsModule, 
              MatProgressBarModule, 
              MatRippleModule,
              MatListModule,
              MatGridListModule,
              MatDatepickerModule,
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})

export class MaterialModule {

}
