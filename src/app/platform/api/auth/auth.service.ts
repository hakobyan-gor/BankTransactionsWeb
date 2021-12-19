import { Injectable } from '@angular/core';
import { LoginRM } from "./req/login";
import { Observable } from "rxjs";
import { ApiService } from "../../modules/http/classes/base.service";
import { RegisterRM } from "./req/register";
import { IRegisterResponseModel } from "./res/register-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  controller = 'auth';

  login(data: LoginRM): Observable<string> {
    return this.httpClient.post('signIn', { parse: true }, data.getModel());
  }

  register(data: RegisterRM): Observable<IRegisterResponseModel> {
    return this.httpClient.post('signUp', { parse: true }, data.getModel());
  }

}
