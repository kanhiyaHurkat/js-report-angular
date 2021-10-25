import {ClassAttendanceComponent} from "./class-attendance.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ControlContainer, FormArray, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('Component: Class Attendance', () => {

  let fixture: ComponentFixture<ClassAttendanceComponent>
  let component: ClassAttendanceComponent
  let controlContainer: ControlContainer
  let attendanceFormArray: FormArray

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassAttendanceComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
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
        MatNativeDateModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [ControlContainer]
    }).compileComponents()

    jest.mock('../../service/add-form.service', () => ({
      initAttendanceForm: jest.fn()
    }))
    fixture = TestBed.createComponent(ClassAttendanceComponent)
    component = fixture.componentInstance
    controlContainer = TestBed.inject(ControlContainer)
    attendanceFormArray = controlContainer.control?.get('attendance') as FormArray
  })

  describe('ClassAttendanceComponent', () => {
    test('should initialize component', () => {
      expect(component).toBeDefined()
    })

    test('should call ngOnInit()', () => {
      const initSpy = jest.spyOn(component, 'ngOnInit')
      component.ngOnInit()
      expect(initSpy).toHaveBeenCalled()
    })

    test('should call resetForm()', () => {
      const resetFormSpy = jest.spyOn(component, 'resetForm')
      component.resetForm()
      expect(resetFormSpy).toHaveBeenCalled()
    })

    test('should call onAdd()', () => {
      const onAddSpy = jest.spyOn(component, 'onAdd')
      const resetFormSpy = jest.spyOn(component, 'resetForm')
      component.onAdd()
      expect(onAddSpy).toHaveBeenCalled()
      expect(resetFormSpy).toHaveBeenCalled()
    })
  })
})
