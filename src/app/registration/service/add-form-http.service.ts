import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/service/base-http.service";
import {RegisterPostModel} from "../model/register-post.model";
import {Observable} from "rxjs";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AddFormHttpService {

  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  addForm(data: RegisterPostModel): Observable<RegisterPostModel> {
    return this.baseHttpService.post(`registration/add_user`, data).pipe(
      pluck('data')
    )
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
