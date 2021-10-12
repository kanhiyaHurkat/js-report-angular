import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scoreForm: FormGroup

  constructor(
    private formService: AddFormService,
    public controlContainer: ControlContainer
  ) {
    this.scoreForm = formService.initScoreForm()
  }

  get scoreFormArray(): FormArray {
    return this.controlContainer.control?.get('scores') as FormArray
  }

  get userRegistrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.scoreForm.reset()
  }

  onAdd() {
    const formGroup = this.formService.initScoreForm()
    formGroup.patchValue(this.scoreForm.value)
    this.scoreFormArray.push(formGroup)
    this.resetForm()
  }
}
