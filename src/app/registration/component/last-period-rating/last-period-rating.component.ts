import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";

@Component({
  selector: 'app-last-period-rating',
  templateUrl: './last-period-rating.component.html',
  styleUrls: ['./last-period-rating.component.scss']
})
export class LastPeriodRatingComponent implements OnInit {

  lastPeriodForm: FormGroup

  constructor(
    private formService: AddFormService,
    public controlContainer: ControlContainer
  ) {
    this.lastPeriodForm = formService.initLastRatingForm()
  }

  get lastPeriodFormArray(): FormArray {
    return this.controlContainer.control?.get('lastRating') as FormArray
  }

  get userRegistrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.lastPeriodForm.reset()
  }

  onAdd() {
    const formGroup = this.formService.initLastRatingForm()
    formGroup.patchValue(this.lastPeriodForm.value)
    this.lastPeriodFormArray.push(formGroup)
    this.resetForm()
  }

}
