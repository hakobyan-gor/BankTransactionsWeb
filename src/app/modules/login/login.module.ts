import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from "./login-routing.module";
import { MaterialModule } from "../../platform/material/material.module";
import { GlobalModule } from "../../platform/global/global.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    GlobalModule,
  ]
})
export class LoginModule { }
