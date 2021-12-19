import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from "./user-routing.module";
import { CreateAccountDialogComponent } from './components/create-account-dialog/create-account-dialog.component';
import { MaterialModule } from "../../platform/material/material.module";
import { GlobalModule } from "../../platform/global/global.module";


@NgModule({
  declarations: [
    UserComponent,
    CreateAccountDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    GlobalModule,
  ]
})
export class UserModule { }
