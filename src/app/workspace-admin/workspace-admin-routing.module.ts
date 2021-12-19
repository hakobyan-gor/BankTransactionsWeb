import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { WorkspaceAdminComponent } from "./workspace-admin/workspace-admin.component";

const routes: Routes = [
  {
    path: '',
    component: WorkspaceAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceAdminRoutingModule { }
