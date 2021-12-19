import { HttpHeaders, HttpParams } from '@angular/common/http';
import { IStringProperty } from "../../../interfaces/string-property";

export interface IOptions extends IStringProperty {
  headers?: HttpHeaders;
  observe?: string;
  parse?: boolean;
  params?: HttpParams | any;
  responseType?: 'json' | 'blob';
  withCredentials?: boolean;
  dontHandleError?: boolean;
  pagination?: boolean;
}
