import { Component, OnInit } from '@angular/core';
import { AccountRM } from "../../../../platform/api/account/req/account";
import { finalize, Subscription } from "rxjs";
import { AccountService } from "../../../../platform/api/account/account.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.css']
})
export class CreateAccountDialogComponent implements OnInit {

  reqData = new AccountRM();

  constructor(
    private accountService: AccountService,
    private matDialogRef: MatDialogRef<CreateAccountDialogComponent>,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.matDialogRef.close();
  }

  submit(): void {
    if (this.reqData.form.valid) {
      this.createAccount();
    }
  }

  createAccount(): Subscription {
    this.reqData.startLoading();
    return this.accountService.create(this.reqData)
      .pipe(finalize(() => this.reqData.endLoading()))
      .subscribe(() => {
        this.matSnackBar.open('User has been created.', 'Cancel', {
          duration: 4000,
        });
        this.matDialogRef.close(true);
      });
  }

}
