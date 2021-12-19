import { HttpHeaders } from '@angular/common/http';
import { IStringProperty } from "../../../interfaces/string-property";

export interface IHttpOptions extends IStringProperty {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: any;
  responseType?: 'json';
  withCredentials?: boolean;
  reportProgress?: boolean;
}
