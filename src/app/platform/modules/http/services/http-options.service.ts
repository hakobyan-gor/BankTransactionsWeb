import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { IHttpOptions, IOptions } from "../interfaces";


@Injectable()
export class HttpOptionsService {

  private defaultHeaders = {
    Accept: 'application/json',
  };

  private defaultOptions: IHttpOptions = {
    headers: new HttpHeaders(this.defaultHeaders),
    observe: undefined,
    params: null,
    responseType: 'json',
    withCredentials: undefined,
  };

  private options: IHttpOptions = {};
  public dontHandleError: boolean | undefined;
  public pagination: boolean | undefined;
  public parse: boolean | undefined;

  public getOptions(params?: any, options: IOptions = {}): IHttpOptions {
    this.options = Object.assign({}, this.defaultOptions);
    this.mergeOptions(options);
    this.options.params = params || {};
    return this.options;
  }

  public setAuth(token: string): void {
    this.setHeader('Authorization', token ? 'Bearer ' + token : '');
  }

  public setLanguageCode(language: string): void {
    this.setHeader('LanguageCode', language);
  }

  public setHeader(name: string, value: string): void {
    if (this.defaultOptions && this.defaultOptions.headers) {
      this.defaultOptions.headers = this.defaultOptions.headers.set(name, value);
    }
  }

  private mergeOptions(options: IOptions): void {
    for (const i in options) {
      if (this.options && this.options.hasOwnProperty(i)) {
        this.options[i] = options[i];
      }
    }

    this.dontHandleError = options.dontHandleError;
    this.pagination = options.pagination;
    this.parse = options.parse;
  }

}
