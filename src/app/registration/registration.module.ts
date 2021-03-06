import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {AddFormComponent} from './component/add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {EducationFormComponent} from './component/education-form/education-form.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatStepperModule} from "@angular/material/stepper";
import {EmergencyContactComponent} from './component/emergency-contact/emergency-contact.component';
import {ScoresComponent} from './component/scores/scores.component';
import {ClassAttendanceComponent} from './component/class-attendance/class-attendance.component';
import {LastPeriodRatingComponent} from './component/last-period-rating/last-period-rating.component';
import {MatSelectModule} from "@angular/material/select";
import {NgxMaskModule} from "ngx-mask";
import {ListComponent} from './component/list/list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DeleteModalComponent} from './component/delete-modal/delete-modal.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AddFormComponent,
    EducationFormComponent,
    EmergencyContactComponent,
    ScoresComponent,
    ClassAttendanceComponent,
    LastPeriodRatingComponent,
    ListComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSelectModule,
    NgxMaskModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [
    DeleteModalComponent
  ]
})
export class RegistrationModule {
}
