import {Router} from "@angular/router";
import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RegistrationModule} from "./registration/registration.module";
import {RouterTestingModule, SpyNgModuleFactoryLoader} from "@angular/router/testing";
import {Location} from "@angular/common";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMaskModule} from "ngx-mask";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";

describe('Router: App', function () {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach( function () {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [SpyNgModuleFactoryLoader],
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        RegistrationModule,
        HttpClientTestingModule,
        MatNativeDateModule,
        NgxMaskModule.forRoot(),
        RouterTestingModule.withRoutes([
          {
            path: '',
            loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
          }
        ])
      ]
    })
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)

    fixture = TestBed.createComponent(AppComponent)
    router.initialNavigation()
  })

  describe('Test Registration Lazy loading Route', function () {
    test('navigate to "" redirects you to /add-user', fakeAsync(() => {
      const loader = TestBed.inject(SpyNgModuleFactoryLoader);
      loader.stubbedModules = {lazyModule: RegistrationModule};
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/add-user');
    }));
  })
})
