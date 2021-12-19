import { Component, OnInit } from '@angular/core';
import { AccountRM } from "../../../../platform/api/account/req/account";
import { AccountService } from "../../../../platform/api/account/account.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { finalize, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-user-account-dialog',
  templateUrl: './create-user-account-dialog.component.html',
  styleUrls: ['./create-user-account-dialog.component.css']
})
export class CreateUserAccountDialogComponent implements OnInit {

  reqData = new AccountRM();

  constructor(
    private accountService: AccountService,
    private matDialogRef: MatDialogRef<CreateUserAccountDialogComponent>,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
  ) {
  }

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
    const { id } = this.activatedRoute.snapshot.params;
    this.reqData.startLoading();
    return this.accountService.createForUserByAdmin(id, this.reqData)
      .pipe(finalize(() => this.reqData.endLoading()))
      .subscribe(() => {
        this.matSnackBar.open('User has been created.', 'Cancel', {
          duration: 4000,
        });
        this.matDialogRef.close(true);
      });
  }

}
