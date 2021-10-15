import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddFormComponent} from "./component/add-form/add-form.component";
import {ListComponent} from "./component/list/list.component";

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
