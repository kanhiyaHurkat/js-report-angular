import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AddFormService} from "../../service/add-form.service";
import {AddFormHttpService} from "../../service/add-form-http.service";
import {RegisterPostModel} from "../../model/register-post.model";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  isSubmitting = false

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
    private httpService: AddFormHttpService
  ) {
    this.userForm = addFormService.initAddForm()
  }

  ngOnInit(): void {
    // jsReport.serverUrl = 'http://localhost:8001';
    // const request = {
    //   template: {
    //     shortid: '5SY-K7zjnb'
    //   }
    // };
    // jsReport.render('_blank', request);
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userForm.controls.picture.patchValue(reader.result)
    };
  }

  onSubmit() {
    this.isSubmitting = true
    const payload: RegisterPostModel = RegisterPostModel.mapFromFormModel(this.userForm.value)
    this.httpService.addForm(payload).pipe(
      take(1)
    ).subscribe((data: RegisterPostModel) => {
      console.log('Post Data: ', data)
      window.open(`http://localhost:3000/registration/view_user/${payload.studentId}`, '_blank', 'height=1080,width=1920,scrollbars=yes')
    })
  }

}
