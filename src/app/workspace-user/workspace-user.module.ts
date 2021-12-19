import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceUserComponent } from './workspace-user/workspace-user.component';
import { WorkspaceUserRoutingModule } from "./workspace-user-routing.module";



@NgModule({
  declarations: [
    WorkspaceUserComponent
  ],
  imports: [
    CommonModule,
    WorkspaceUserRoutingModule
  ]
})
export class WorkspaceUserModule { }
