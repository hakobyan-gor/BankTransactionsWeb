import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WorkspaceAdminComponent } from "../workspace-admin/workspace-admin/workspace-admin.component";

const routes: Routes = [
  {
    path: '',
    component: WorkspaceAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/user/user.module').then(m => m.UserModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceUserRoutingModule { }
