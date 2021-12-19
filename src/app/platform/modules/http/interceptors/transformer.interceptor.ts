import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpOptionsService } from '../services/http-options.service';
import { ITransformParams } from "../interfaces";
import { Request } from "../../../models/request";

@Injectable()
export class TransformerInterceptor implements HttpInterceptor {

  constructor(
    private httpOptions: HttpOptionsService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params: ITransformParams = this.getParams();
    return next.handle(request)
      .pipe(
        map((res: HttpResponse<any> | { type: number }) => this.transform(res, params)),
      );
  }

  private getParams(): ITransformParams {
    return {
      parse: this.httpOptions.parse,
      pagination: this.httpOptions.pagination,
    };
  }

  private transform(res: HttpResponse<any> | { type: number }, params: ITransformParams): HttpEvent<any> {
    if (!params.parse || !(res instanceof HttpResponse) || !res.body) {
      if (res instanceof HttpResponse && res.body) {
        const body = new Request(res.body);
        if (!body.success) {
          const message = body.message;
          throw { message };
        }
      }
      return res;
    }

    return this.transformItem(res, params);
  }

  private transformItem(res: HttpResponse<any>, params: ITransformParams): HttpResponse<any> {
    if (!res.body.success) {
      const { message } = res.body;
      throw { message };
    }
    const body = new Request(res.body, params);

    return res.clone<any>({
      body: body.data,
    });
  }
}
