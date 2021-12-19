import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CreateAccountDialogComponent } from "../components/create-account-dialog/create-account-dialog.component";
import { AccountService } from "../../../platform/api/account/account.service";
import { MatTableDataSource } from "@angular/material/table";
import { finalize, Subscription } from "rxjs";
import { IAccountModel } from "../../../platform/api/account/res/account.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  inProgress = false;
  displayedColumns: string[] = ['currency', 'createdDate'];
  dataSource = new MatTableDataSource<IAccountModel>([]);
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(
    private matDialog: MatDialog,
    private accountService: AccountService,
  ) {
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  openCreateAccountDialog(): void {
    const dialog = this.matDialog.open(CreateAccountDialogComponent, {
      width: '650px',
    });

    dialog.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.getAccounts();
      }
    });
  }

  getAccounts(): Subscription {
    this.inProgress = true;
    const { start, end } = this.range.value;
    const data: any = {};
    if (start)
      data.fromDate = new Date(start).setHours(0, 0, 0);
    if (end)
      data.toDate = new Date(end).setHours(23, 59, 59);

    return this.accountService.getList(data)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe((data) => {
        this.dataSource.connect().next(data);
      });
  }

}
