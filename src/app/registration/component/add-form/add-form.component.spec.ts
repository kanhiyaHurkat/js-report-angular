import {RegisterFormModel} from "../../model/register-form.model";
import {AddFormComponent} from "./add-form.component";
import {AddFormService} from "../../service/add-form.service";
import {AddFormHttpService} from "../../service/add-form-http.service";
import {of} from "rxjs";
import {RegisterPostModel} from "../../model/register-post.model";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaskModule} from "ngx-mask";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {EducationFormComponent} from "../education-form/education-form.component";
import {EmergencyContactComponent} from "../emergency-contact/emergency-contact.component";
import {ScoresComponent} from "../scores/scores.component";
import {ClassAttendanceComponent} from "../class-attendance/class-attendance.component";
import {LastPeriodRatingComponent} from "../last-period-rating/last-period-rating.component";
import {ListComponent} from "../list/list.component";
import {DeleteModalComponent} from "../delete-modal/delete-modal.component";
import {ActivatedRoute, Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

/*const readFileAsync = (file: any, use = false) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    if (use) reader.readAsDataURL(file);
    else reader.readAsArrayBuffer(file);
    (readFileAsync as any)._reader = reader;
  });

const mFileReader = jest.fn(() => {
  return {
    readAsDataURL: jest.fn(),
    readAsArrayBuffer: jest.fn(),
  };
});

(global as any).FileReader = mFileReader;*/

describe('AddFormComponent', () => {

  let component: AddFormComponent
  let fixture: ComponentFixture<AddFormComponent>
  let addFormService: AddFormService
  let addFormHttpService: AddFormHttpService
  let route: ActivatedRoute

  const routes: Routes = [
    {path: 'list', component: ListComponent},
  ];


  const formMockData: RegisterFormModel = {
    id: "61698633a9900374783f8d2b",
    studentId: "2",
    picture: "",
    name: "2",
    gender: "male",
    dob: "2021-10-14",
    phone: "1234567890",
    email: "ads@dc.sdf",
    address: "asd",
    language: "English",
    enteredDate: "2021-10-15",
    education: [
      {
        id: "61698633a9900374783f8d2d",
        schoolName: "2",
        city: "2",
        country: "2",
        startYear: "2021",
        endYear: "2021",
        isPresent: false
      }
    ],
    emergencyContact: [{
      id: "id",
      name: "name",
      priority: "priority",
      relation: "relation",
      phone: "phone",
    }],
    scores: [{
      id: "id",
      period: 1,
      course: "course",
      credits: 2,
      homeroom: 3,
      score: 4,
    }],
    attendance: [{
      id: "id",
      date: "date",
      state: "state",
    }],
    lastRating: [{
      id: "asdasd",
      period: 1,
      highCourses: 2,
      mediumCourses: 3,
      lowCourses: 4
    }],
    isSelected: false
  }

  const postMockData: RegisterPostModel = {
    _id: "61698633a9900374783f8d2b",
    studentId: "2",
    picture: "",
    name: "2",
    gender: "male",
    dob: "2021-10-14",
    phone: "1234567890",
    email: "ads@dc.sdf",
    address: "asd",
    language: "English",
    enteredDate: "2021-10-15",
    schools: [
      {
        _id: "61698633a9900374783f8d2d",
        name: "2",
        city: "2",
        country: "2",
        yearStart: "2021",
        yearEnd: "2021",
        isPresent: false
      }
    ],
    contacts: [{
      _id: "id",
      name: "name",
      priority: "priority",
      relationship: "relation",
      phone: "phone",
    }],
    scores: [{
      _id: "id",
      period: 1,
      course: "course",
      credits: 2,
      homeroom: 3,
      score: 4,
    }],
    attendance: [{
      _id: "id",
      date: "date",
      state: "state",
    }],
    lastRating: [{
      _id: "asdasd",
      period: 1,
      highCourses: 2,
      mediumCourses: 3,
      lowCourses: 4
    }]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
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
        MatDialogModule,
        RouterTestingModule.withRoutes(routes),
        MatNativeDateModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule
      ]
    }).compileComponents()
    addFormService = TestBed.inject(AddFormService)
    addFormHttpService = TestBed.inject(AddFormHttpService)
    route = TestBed.inject(ActivatedRoute)
  })

  describe('Component Setup ', function () {
    test('should set query params with userID', function () {
      fixture = TestBed.createComponent(AddFormComponent)
      component = fixture.componentInstance
      route.queryParams = of({userId: '61698633a9900374783f8d2b'})
      const getUserByIdSpy = jest.spyOn(component, "getUserById")
      component.ngOnInit()
      route.queryParams.subscribe(({userId}) => {
        expect(userId).toBeTruthy()
        expect(getUserByIdSpy).toHaveBeenCalledWith(userId)
      })
    });
  });

  describe('Fetch User By id', function () {
    test('should fetch user data by id', function () {
      fixture = TestBed.createComponent(AddFormComponent)
      component = fixture.componentInstance
      const getUserDataSpy = jest.spyOn(addFormHttpService, 'getUserById').mockImplementation(() => of(formMockData))
      component.getUserById('61698633a9900374783f8d2b')
      expect(getUserDataSpy).toHaveBeenCalledWith('61698633a9900374783f8d2b')

    });
  })

  describe('Handle File upload',  function () {
    test('should set picture control value', async  function () {
      fixture = TestBed.createComponent(AddFormComponent)
      component = fixture.componentInstance
      // const windowFileReader = jest.spyOn(window, 'FileReader').mockReturnValue(new FileReader())
      let blob = new Blob([""], { type: 'img/png' });
      let fakeF = <File>blob;
      component.handleUpload({target: {files: {0: fakeF}}})
      /*const pending = readFileAsync(blob, true);
      const mReader = (readFileAsync as any)._reader;
      mReader.result = 'mocked result';
      mReader.onload = async () => {
      const actual = await pending;
      expect(actual).toBe('mocked result');
      component.userForm.controls.picture.patchValue(actual)
      expect(component.userForm.controls.picture.value).toBe('mocked result');
      }*/
      // expect(windowFileReader).toBeCalled()
      // let f = new FileReader()
      // f.onload = () => {
      // expect(component.userForm.controls.picture.value).toBeTruthy()
      // }
    })
  })

  describe('Remove profile image', function () {
    test('should set picture control to value null', function () {
      fixture = TestBed.createComponent(AddFormComponent)
      component = fixture.componentInstance
      const pictureControl = component.userForm.controls.picture
      pictureControl.setValue(formMockData.picture)
      component.removeProfileImage()
      expect(pictureControl.value).toBeFalsy()
    });
  })

  describe('Register user on submit', function () {
    test('should submit the user data', function () {
      fixture = TestBed.createComponent(AddFormComponent)
      component = fixture.componentInstance
      const onSubmitSpy = jest.spyOn(addFormHttpService, 'onSubmit').mockImplementation(() => of(postMockData))
      component.isSubmitting = false
      component.onSubmit()
      expect(component.isSubmitting).toBe(true)
      expect(onSubmitSpy).toBeCalled()
      // expect(routerNavigateSpy).toBeCalled()
      // expect(location.pathname).toEqual('/list')
      // expect(snackBarSpy).toBeCalled()
    })
  })
})
