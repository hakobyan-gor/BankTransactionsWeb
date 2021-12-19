import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { UserDetailsComponent } from "./pages/user-details/user-details.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: UsersListComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
