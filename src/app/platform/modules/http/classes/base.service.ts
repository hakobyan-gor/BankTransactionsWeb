import { Injectable } from '@angular/core';
import { IHttpServiceContract } from '../interfaces/http-service-contract';
import { HttpClient } from "./http-client";
import { IOptions } from "../interfaces";
import { HttpService } from "../services/http.service";

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService implements IHttpServiceContract {

  protected httpClient: HttpClient;
  public httpOptions: IOptions = {};
  public abstract controller: string;

  protected constructor(
    public http: HttpService,
  ) {
    this.httpClient = new HttpClient(this);
  }

}
