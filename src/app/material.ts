import { MatButtonModule, 
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
         MatProgressBarModule,
         MatRippleModule,
         MatProgressSpinnerModule,
         MatListModule    
 } 
 

 from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
              MatListModule
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
              MatListModule
            ],


})
export class MaterialModule {

}
