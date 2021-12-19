import { NgModule } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { AuthStorage } from "../platform/storages/auth.storage";
import { configAuthRoutesProvider } from "../platform/providers/config-auth-routes.provider";


@NgModule({
  imports: [
    RouterModule,
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: configAuthRoutesProvider,
      deps: [AuthStorage],
      multi: true,
    },
  ]
})
export class HandlerModule { }
