import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";
import {AddFormHttpService} from "../../service/add-form-http.service";
import {RegisterPostModel} from "../../model/register-post.model";
import {take} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {
  AttendanceFormModel,
  EducationFormModel,
  EmergencyContactFormModel,
  LastRatingFormModel,
  RegisterFormModel,
  ScoreFormModel
} from "../../model/register-form.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import moment from "moment";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  isSubmitting = false

  currentDate = moment().format()

  languages = [
    {
      key: 'English',
      value: 'English'
    },
    {
      key: 'Hindi',
      value: 'Hindi'
    },
    {
      key: 'Gujarati',
      value: 'Gujarati'
    },
  ]

  genders = [
    {
      key: 'male',
      value: 'Male'
    },
    {
      key: 'female',
      value: 'Female'
    },
    {
      key: 'other',
      value: 'Other'
    },
  ]

  userForm: FormGroup

  constructor(
    private addFormService: AddFormService,
    private httpService: AddFormHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userForm = addFormService.initAddForm()
  }

  get schoolFormArray(): FormArray {
    return this.userForm.controls.education as FormArray
  }

  get contactFormArray(): FormArray {
    return this.userForm.controls.emergencyContact as FormArray
  }

  get scoreFormArray(): FormArray {
    return this.userForm.controls.scores as FormArray
  }

  get attendanceFormArray(): FormArray {
    return this.userForm.controls.attendance as FormArray
  }

  get lastRatingFormArray(): FormArray {
    return this.userForm.controls.lastRating as FormArray
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      take(1)
    ).subscribe(({userId}) => {
      if (userId) {
        this.getUserById(userId)
      }
    })
    // jsReport.serverUrl = 'http://localhost:8001';
    // const request = {
    //   template: {
    //     shortid: '5SY-K7zjnb'
    //   }
    // };
    // jsReport.render('_blank', request);
  }

  getUserById(userId: string) {
    this.httpService.getUserById(userId).pipe(
      take(1)
    ).subscribe((data: RegisterFormModel) => {
      this.userForm.patchValue(data)

      if (data.education && data.education.length) {
        data.education.map(item => {
          const form = this.addFormService.initEducationForm()
          form.patchValue(item)
          this.schoolFormArray.push(form)
        })
      }

      if (data.emergencyContact && data.emergencyContact.length) {
        data.emergencyContact.map(item => {
          const form = this.addFormService.initEmergencyContactForm()
          form.patchValue(item)
          this.contactFormArray.push(form)
        })
      }

      if (data.scores && data.scores.length) {
        data.scores.map(item => {
          const form = this.addFormService.initScoreForm()
          form.patchValue(item)
          this.scoreFormArray.push(form)
        })
      }

      if (data.attendance && data.attendance.length) {
        data.attendance.map(item => {
          const form = this.addFormService.initAttendanceForm()
          form.patchValue(item)
          this.attendanceFormArray.push(form)
        })
      }

      if (data.lastRating && data.lastRating.length) {
        data.lastRating.map(item => {
          const form = this.addFormService.initLastRatingForm()
          form.patchValue(item)
          this.lastRatingFormArray.push(form)
        })
      }
      // this.patchArrayData(data.education as EducationFormModel[], this.addFormService.initEducationForm(), this.schoolFormArray)
      // this.patchArrayData(data.emergencyContact as EmergencyContactFormModel[], this.addFormService.initEmergencyContactForm(), this.contactFormArray)
      // this.patchArrayData(data.scores as ScoreFormModel[], this.addFormService.initScoreForm(), this.scoreFormArray)
      // this.patchArrayData(data.attendance as AttendanceFormModel[], this.addFormService.initAttendanceForm(), this.attendanceFormArray)
      // this.patchArrayData(data.lastRating as LastRatingFormModel[], this.addFormService.initLastRatingForm(), this.lastRatingFormArray)

    })
  }

  /*patchArrayData(
    data: EducationFormModel[] | EmergencyContactFormModel[] | ScoreFormModel[] | AttendanceFormModel[] | LastRatingFormModel[],
    form: FormGroup,
    array: FormArray) {
    if (data && data.length) {
      data.map(item => {
        const formGroup = form
        formGroup.patchValue(item)
        array.push(formGroup)
      })
    }
  }*/

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userForm.controls.picture.patchValue(reader.result)
    };
  }

  removeProfileImage() {
    this.userForm.controls.picture.setValue(null)
  }

  onSubmit() {
    this.isSubmitting = true
    const payload: RegisterPostModel = RegisterPostModel.mapFromFormModel(this.userForm.value)
    this.httpService.onSubmit(payload).pipe(
      take(1)
    ).subscribe((_: RegisterPostModel) => {
      this.router.navigateByUrl('/list').then(_ => {
        this.snackBar.open('User registered successfully', 'Close', {duration: 5000})
      })
    })
  }

}
