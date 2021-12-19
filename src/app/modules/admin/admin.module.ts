import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { MaterialModule } from "../../platform/material/material.module";
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { GlobalModule } from "../../platform/global/global.module";
import { CreateUserAccountDialogComponent } from './components/create-user-account-dialog/create-user-account-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    UserDetailsComponent,
    CreateUserDialogComponent,
    CreateUserAccountDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    GlobalModule,
  ]
})
export class AdminModule { }
