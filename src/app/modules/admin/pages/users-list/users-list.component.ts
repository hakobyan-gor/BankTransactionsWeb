import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../platform/api/user/user.service";
import { finalize, Subscription } from "rxjs";
import { PagingRequest } from "../../../../platform/models/paging-request";
import { IUserModel } from "../../../../platform/api/user/res/user.model";
import { MatTableDataSource } from "@angular/material/table";
import { PagingResponse } from "../../../../platform/models/paging-response";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserDialogComponent } from "../../components/create-user-dialog/create-user-dialog.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  paging = new PagingRequest();
  inProgress = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'createdDate'];
  dataSource = new MatTableDataSource<IUserModel>([]);
  data!: PagingResponse<IUserModel>;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  openCreateUserDialog(): void {
    const dialog = this.matDialog.open(CreateUserDialogComponent, {
      width: '650px',
    });

    dialog.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.getUsers();
      }
    });
  }

  changePage(event: PageEvent): void {
    this.paging.change(event);
    this.getUsers();
  }

  getUsers(): Subscription {
    this.inProgress = true;
    return this.userService.getList(this.paging)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe((data) => {
        this.data = data;
        this.dataSource.connect().next(data.list);
      });
  }

}
