import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
              MatIconModule, MatMenuModule, MatSidenavModule, MatStepperModule,
              MatFormFieldModule, MatDividerModule, MatCardModule, MatInputModule,
              FormsModule, MatProgressBarModule, MatRippleModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
              MatIconModule, MatMenuModule, MatSidenavModule,
              MatStepperModule, MatFormFieldModule, MatDividerModule,
              MatCardModule, MatInputModule,
              FormsModule, MatProgressBarModule, MatRippleModule],


})
export class MaterialModule {

}
