import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";

@Component({
  selector: 'app-class-attendance',
  templateUrl: './class-attendance.component.html',
  styleUrls: ['./class-attendance.component.scss']
})
export class ClassAttendanceComponent implements OnInit {

  attendanceForm: FormGroup

  constructor(
    private formService: AddFormService,
    public controlContainer: ControlContainer
  ) {
    this.attendanceForm = formService.initAttendanceForm()
  }

  get attendanceFormArray(): FormArray {
    return this.userRegistrationForm.get('attendance') as FormArray
  }

  get userRegistrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.attendanceForm.reset()
  }

  onAdd() {
    const formGroup = this.formService.initAttendanceForm()
    formGroup.patchValue(this.attendanceForm.value)
    this.attendanceFormArray.push(formGroup)
    this.resetForm()
  }

}
