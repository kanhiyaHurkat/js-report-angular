import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AddFormService {

  constructor(
    private fb: FormBuilder
  ) {
  }

  initAddForm(): FormGroup {
    return this.fb.group({
      id: [null],
      studentId: [null, Validators.required],
      name: [null, Validators.required],
      picture: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      address: [null, Validators.required],
      language: [null, Validators.required],
      enteredDate: [moment().format(), Validators.required],
      education: this.fb.array([]),
      emergencyContact: this.fb.array([]),
      scores: this.fb.array([]),
      attendance: this.fb.array([]),
      lastRating: this.fb.array([]),
      isSelected: [false]
    })
  }

  initEducationForm(): FormGroup {
    return this.fb.group({
      id: [null],
      schoolName: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      startYear: [moment(), Validators.required],
      endYear: [moment(), Validators.required],
      isPresent: [false]
    })
  }

  initEmergencyContactForm(): FormGroup {
    return this.fb.group({
      id: [null],
      name: [null, Validators.required],
      priority: [null, Validators.required],
      relation: [null, Validators.required],
      phone: [null, Validators.required],
    })
  }

  initScoreForm(): FormGroup {
    return this.fb.group({
      id: [null],
      period: [null, Validators.required],
      course: [null, Validators.required],
      credits: [null, Validators.required],
      homeroom: [null, Validators.required],
      score: [null, Validators.required],
    })
  }

  initAttendanceForm(): FormGroup {
    return this.fb.group({
      id: [null],
      date: [null, Validators.required],
      state: [null, Validators.required],
    })
  }

  initLastRatingForm(): FormGroup {
    return this.fb.group({
      id: [null],
      period: [null, Validators.required],
      highCourses: [null, Validators.required],
      mediumCourses: [null, Validators.required],
      lowCourses: [null, Validators.required],
    })
  }
}
