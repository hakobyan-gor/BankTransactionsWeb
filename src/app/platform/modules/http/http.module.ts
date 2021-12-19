import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { TransformerInterceptor } from './interceptors/transformer.interceptor';
import { HttpService } from './services/http.service';
import { HttpOptionsService } from './services/http-options.service';
import { MaterialModule } from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
})
export class HttpModule {

  static forRoot(): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        HttpService,
        HttpOptionsService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: TransformerInterceptor, multi: true },
      ],
    };
  }

}
