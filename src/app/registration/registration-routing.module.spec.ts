import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {RouterTestingModule, SpyNgModuleFactoryLoader} from "@angular/router/testing";
import {NgxMaskModule} from "ngx-mask";
import {Router, Routes} from "@angular/router";
import {CommonModule, Location} from "@angular/common";
import {AddFormComponent} from "./component/add-form/add-form.component";
import {ListComponent} from "./component/list/list.component";
import {EducationFormComponent} from "./component/education-form/education-form.component";
import {EmergencyContactComponent} from "./component/emergency-contact/emergency-contact.component";
import {ScoresComponent} from "./component/scores/scores.component";
import {ClassAttendanceComponent} from "./component/class-attendance/class-attendance.component";
import {LastPeriodRatingComponent} from "./component/last-period-rating/last-period-rating.component";
import {DeleteModalComponent} from "./component/delete-modal/delete-modal.component";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-user',
    pathMatch: 'full',
  },
  {
    path: 'add-user',
    component: AddFormComponent
  },
  {
    path: 'edit-user',
    component: AddFormComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

describe('Router: Registration', function () {
  let location: Location;
  let router: Router;

  beforeEach( function () {
    TestBed.configureTestingModule({
      providers: [SpyNgModuleFactoryLoader],
      imports: [
        RouterTestingModule.withRoutes(routes),
        CommonModule,
        RegistrationRoutingModule,
        ReactiveFormsModule,
        FormsModule,
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
        MatDialogModule
      ],
      declarations: [
        AddFormComponent,
        EducationFormComponent,
        EmergencyContactComponent,
        ScoresComponent,
        ClassAttendanceComponent,
        LastPeriodRatingComponent,
        ListComponent,
        DeleteModalComponent
      ]
    })
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    router.initialNavigation()
  })

  describe('Test Registration Route: Add From => AddFormComponent', function () {
    test('navigate to "" redirects you to /add-user', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/add-user');
    }));
  })

  describe('Test Registration Route: Edit Form => AddFormComponent', function () {
    test('navigate to "edit-user"', fakeAsync(() => {
      router.navigate(['edit-user']);
      tick();
      expect(location.path()).toBe('/edit-user');
    }));
  })

  describe('Test Registration Route: List => ListComponent', function () {
    test('navigate to "list"', fakeAsync(() => {
      router.navigate(['list']);
      tick();
      expect(location.path()).toBe('/list');
    }));
  })

})
