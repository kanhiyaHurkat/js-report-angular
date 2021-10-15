import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/service/base-http.service";
import {RegisterPostModel} from "../model/register-post.model";
import {Observable} from "rxjs";
import {map, pluck} from "rxjs/operators";
import {RegisterViewModel} from "../model/register-view.model";
import {RegisterApiModel} from "../model/register-api.model";
import {RegisterFormModel} from "../model/register-form.model";

@Injectable({
  providedIn: 'root'
})
export class AddFormHttpService {

  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  onSubmit(data: RegisterPostModel) {
    if (data._id) {
      return this.updateUser(data)
    } else {
      return this.addUser(data)
    }
  }

  addUser(data: RegisterPostModel): Observable<RegisterPostModel> {
    return this.baseHttpService.post(`registration/add_user`, data).pipe(
      pluck('data')
    )
  }

  updateUser(data: RegisterPostModel): Observable<RegisterPostModel> {
    return this.baseHttpService.post(`registration/add_user`, data).pipe(
      pluck('data')
    )
  }

  getUsers(): Observable<RegisterViewModel[]> {
    return this.baseHttpService.get(`registration/users`).pipe(
      pluck('data', 'items'),
      map((response: RegisterApiModel[]) => response && response.map(item => RegisterViewModel.mapFromApiModel(item)))
    )
  }

  getUserById(userId: string): Observable<RegisterFormModel> {
    return this.baseHttpService.get(`registration/get_user/${userId}`).pipe(
      pluck('data'),
      map((response: RegisterApiModel) => RegisterFormModel.mapFromApiModel(response))
    )
  }

  deleteUser(deletedItems: string[]): Observable<any> {
    return this.baseHttpService.post(`registration/delete_user`, {deletedItems})
  }

  getReport() {
    return this.baseHttpService.get(`registration/view_user`)
  }

  getJsReport() {
    const parameter = {
      template: {shortid: '5SY-K7zjnb'}
    }
    return this.baseHttpService.postJsReport(``, parameter)
  }
}
