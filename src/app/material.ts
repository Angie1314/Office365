import { MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatStepperModule,
  MatFormFieldModule,
  MatDividerModule,
  MatInputModule,
  MatProgressBarModule,
  MatButtonModule,
  MatRippleModule,
  MatListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  } from '@angular/material';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
