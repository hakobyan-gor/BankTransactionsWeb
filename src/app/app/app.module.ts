import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from "./app-routing.module";
import { StartupService } from "../platform/services/startup.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "../platform/modules/http/http.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: StartupService) => () => service.load(),
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
