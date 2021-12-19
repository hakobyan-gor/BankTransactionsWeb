import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../../modules/http/classes/base.service";
import { IUserModel } from "./res/user.model";
import { UserRM } from "./req/user";
import { PagingRequest } from "../../models/paging-request";
import { PagingResponse } from "../../models/paging-response";
import { IUserDetailsModel } from "./res/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  controller = 'users';

  get(): Observable<IUserModel> {
    return this.httpClient.get('detail', { parse: true, dontHandleError: true });
  }

  create(data: UserRM): Observable<number> {
    return this.httpClient.post('', { parse: true }, data.getModel());
  }

  getList(data: PagingRequest): Observable<PagingResponse<IUserModel>> {
    return this.httpClient.get(data.path, { parse: true });
  }

  getDetails(id: number): Observable<IUserDetailsModel> {
    return this.httpClient.get(`${id}`, { parse: true });
  }

}
