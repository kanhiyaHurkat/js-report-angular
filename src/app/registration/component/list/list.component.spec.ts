import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ListComponent} from "./list.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddFormHttpService} from "../../service/add-form-http.service";
import {of} from "rxjs";
import {RegisterViewModel} from "../../model/register-view.model";
import {Routes} from "@angular/router";
import {AddFormComponent} from "../add-form/add-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {EducationFormComponent} from "../education-form/education-form.component";
import {EmergencyContactComponent} from "../emergency-contact/emergency-contact.component";
import {ScoresComponent} from "../scores/scores.component";
import {ClassAttendanceComponent} from "../class-attendance/class-attendance.component";
import {LastPeriodRatingComponent} from "../last-period-rating/last-period-rating.component";
import {DeleteModalComponent} from "../delete-modal/delete-modal.component";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

const routes: Routes = [
  {
    path: 'edit-user',
    component: AddFormComponent
  }
];

class DialogMock {
  open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('Component: List Component', function () {

  let fixture: ComponentFixture<ListComponent>
  let component: ListComponent
  let dialog: MatDialog
  let service: AddFormHttpService
  const viewMockData: RegisterViewModel = {
    id: '123',
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
        name: "2",
        city: "2",
        country: "2",
        yearStart: "2021",
        yearEnd: "2021",
        isPresent: false
      }
    ],
    contacts: [{
      name: "name",
      priority: "priority",
      relationship: "relation",
      phone: "phone",
    }],
    scores: [{
      period: 1,
      course: "course",
      credits: 2,
      homeroom: 3,
      score: 4,
    }],
    attendance: [{
      date: "date",
      state: "state",
    }],
    lastRating: [{
      period: 1,
      highCourses: 2,
      mediumCourses: 3,
      lowCourses: 4
    }],
    isSelected: false
  }

  beforeEach(function () {
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
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [
        AddFormHttpService,
        {provide: MatDialog, useClass: DialogMock}
      ],
    }).overrideModule(BrowserDynamicTestingModule,{
      set: {
        entryComponents: [DeleteModalComponent]
      }
    }).compileComponents()

    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance
    service = TestBed.inject(AddFormHttpService)
    dialog = TestBed.inject(MatDialog)
  })

  describe('Component Initialization', function () {
    test('should initialize component', function () {
      expect(component).toBeDefined()
    })
  })

  describe('OnInit Method', function () {
    test('should call ngOnInit()', function () {
      const getUserListSpy = jest.spyOn(component, 'getUserList')
      component.ngOnInit()
      expect(getUserListSpy).toHaveBeenCalled()
    })
  })

  describe('Get User List Method', function () {
    test('should call getUserList()', function () {
      const getUserListSpy = jest.spyOn(service, 'getUsers').mockReturnValue(of([viewMockData]))
      component.getUserList()
      expect(getUserListSpy).toHaveBeenCalled()
    })
  })

  describe('On View Function', function () {
    test('should open blank window to view user resume', function () {
      const windowOpenSpy = jest.spyOn(window, 'open')
      const userId = '61698633a9900374783f8d2b'
      const url = `http://localhost:3000/registration/print_user/${userId}`
      const target = '_blank'
      const feature = 'height=1080,width=1920,scrollbars=yes'
      component.onView(userId)
      expect(windowOpenSpy).toHaveBeenCalledWith(url, target, feature)
    })
  })

  describe('On Print Function', function () {
    test('should open blank window to print user resume', function () {
      const windowOpenSpy = jest.spyOn(window, 'open')
      const url = `http://localhost:3000/registration/print_users`
      const target = '_blank'
      const feature = 'height=1080,width=1920,scrollbars=yes'
      component.printUser()
      expect(windowOpenSpy).toHaveBeenCalledWith(url, target, feature)
    })
  })


  describe('Delete Function', function () {
    test('should call onDelete() function', function () {
      const dialogOpenSpy = jest.spyOn(dialog, 'open')
      const deleteUserSpy = jest.spyOn(service, 'deleteUser')
      const getUserListSpy = jest.spyOn(component, 'getUserList')
      const userId = '61698633a9900374783f8d2b'
      const dialogConfig = {
        width: '600px',
      }
      component.onDelete(userId)
      expect(dialogOpenSpy).toHaveBeenCalledWith(DeleteModalComponent, dialogConfig)
      expect(deleteUserSpy).toHaveBeenCalledWith([userId])
    })
  })


  describe('On Edit Method', function () {
    test('should call onEdit()', function () {
      const userId = '61698633a9900374783f8d2b'
      component.onEdit(userId)
    })
  })

  describe('Update All Complete Method', function () {
    test('should updateAllComplete() set allDeleted to false', function () {
      (component.userList as RegisterViewModel[]).push(viewMockData)
      component.updateAllComplete()
      expect(component.allDeleted).toBeFalsy()
    })

    test('should updateAllComplete() set allDeleted to true', function () {
      viewMockData.isSelected = true;
      (component.userList as RegisterViewModel[]).push(viewMockData)
      component.updateAllComplete()
      expect(component.allDeleted).toBeTruthy()
    })
  })

  describe('Some Complete Method', function () {
    test('should someComplete() return false', function () {
      component.userList = null
      let someCompleteFunCall = component.someComplete()
      expect(someCompleteFunCall).toBeFalsy()
    })

    test('should someComplete() return true', function () {
      (component.userList as RegisterViewModel[]).push(viewMockData)
      let someCompleteFunCall = component.someComplete()
      expect(someCompleteFunCall).toBeTruthy()
    })
  })

  describe('Set All Method', function () {
    test('should setAll() with completed false', function () {
      component.allDeleted = true
      component.userList = null
      component.setAll(false)
      expect(component.allDeleted).toBeFalsy()
      // expect(component.allDeleted).toBeFalsy()
    })

    test('should setAll() with completed true', function () {
      component.allDeleted = false
      component.userList = [viewMockData]
      component.setAll(true)
      expect(component.allDeleted).toBeTruthy()
      // expect(component.allDeleted).toBeFalsy()
    })
  })

})
