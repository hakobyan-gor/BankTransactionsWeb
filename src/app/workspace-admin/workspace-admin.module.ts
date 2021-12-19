import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceAdminComponent } from './workspace-admin/workspace-admin.component';
import { WorkspaceAdminRoutingModule } from "./workspace-admin-routing.module";


@NgModule({
  declarations: [
    WorkspaceAdminComponent
  ],
  imports: [
    CommonModule,
    WorkspaceAdminRoutingModule
  ]
})
export class WorkspaceAdminModule { }
