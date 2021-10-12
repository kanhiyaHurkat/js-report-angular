import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss']
})
export class EmergencyContactComponent implements OnInit {

  emergencyContactForm: FormGroup

  constructor(
    private formService: AddFormService,
    public controlContainer: ControlContainer
  ) {
    this.emergencyContactForm = formService.initEmergencyContactForm()
  }

  get emergencyContactFormArray(): FormArray {
    return this.controlContainer.control?.get('emergencyContact') as FormArray
  }

  get userRegistrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.emergencyContactForm.reset()
  }

  onAdd() {
    const formGroup = this.formService.initEmergencyContactForm()
    formGroup.patchValue(this.emergencyContactForm.value)
    this.emergencyContactFormArray.push(formGroup)
    this.resetForm()
  }

}
