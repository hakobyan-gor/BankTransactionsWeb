import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../platform/api/user/user.service";
import { finalize, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { IUserDetailsModel } from "../../../../platform/api/user/res/user-details.model";
import { CreateAccountDialogComponent } from "../../../user/components/create-account-dialog/create-account-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { IAccountModel } from "../../../../platform/api/account/res/account.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  data!: IUserDetailsModel;
  inProgress = false;
  displayedColumns: string[] = ['currency', 'createdDate'];
  dataSource = new MatTableDataSource<IAccountModel>([]);

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getDetails();
  }

  openCreateAccountDialog(): void {
    const dialog = this.matDialog.open(CreateAccountDialogComponent, {
      width: '650px',
    });

    dialog.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.getDetails();
      }
    });
  }

  getDetails(): Subscription {
    this.inProgress = true;
    const { id } = this.activatedRoute.snapshot.params;
    return this.userService.getDetails(id)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe((data) => {
        this.data = data;
        this.dataSource.connect().next(data.accounts);
      });
  }

}
