import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormControl, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";
import * as moment from "moment";
import {Moment} from "moment";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDatepicker} from "@angular/material/datepicker";

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EducationFormComponent implements OnInit {

  educationForm: FormGroup
  currentDate: string = moment().format()

  constructor(
    private formService: AddFormService,
    public controlContainer: ControlContainer
  ) {
    this.educationForm = formService.initEducationForm()
  }

  get educationFormArray(): FormArray {
    return this.controlContainer.control?.get('education') as FormArray
  }

  get startYearControl(): FormControl {
    return this.educationForm.controls.startYear as FormControl
  }

  get userRegistrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.educationForm.reset()
  }

  onAdd() {
    const formGroup = this.formService.initEducationForm()
    formGroup.patchValue(this.educationForm.value)
    this.educationFormArray.push(formGroup)
    this.resetForm()
  }

  // onDelete(index: number) {
  //   this.educationList.splice(index, 1)
  //   this.educationFormArray.patchValue(this.educationList)
  // }

  isPresentChecked(value: boolean) {
    if (value) {
      this.educationForm.controls.endYear.patchValue(this.currentDate)
      this.educationForm.controls.endYear.disable()
    } else {
      this.educationForm.controls.endYear.patchValue(null)
      this.educationForm.controls.endYear.enable()
    }
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.startYearControl.value;
    ctrlValue.year(normalizedYear.year());
    this.startYearControl.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.startYearControl.value;
    ctrlValue.month(normalizedMonth.month());
    this.startYearControl.setValue(ctrlValue);
    datepicker.close();
  }

}
