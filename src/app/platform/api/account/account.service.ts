import { Injectable } from '@angular/core';
import { ApiService } from "../../modules/http/classes/base.service";
import { AccountRM } from "./req/account";
import { Observable } from "rxjs";
import { IAccountModel } from "./res/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService {

  controller = 'accounts';

  create(data: AccountRM): Observable<number> {
    return this.httpClient.post('', { parse: true }, data.getModel());
  }

  createForUserByAdmin(userId: number, data: AccountRM): Observable<number> {
    return this.httpClient.post(`user/${userId}`, { parse: true }, data.getModel());
  }

  getList(data: { fromDate: number, toDate: number }): Observable<IAccountModel[]> {
    return this.httpClient.post('list', { parse: true }, data)
  }

}
