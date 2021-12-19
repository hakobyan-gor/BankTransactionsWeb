import { Component, OnInit } from '@angular/core';
import { UserRM } from "../../../../platform/api/user/req/user";
import { MatDialogRef } from "@angular/material/dialog";
import { finalize, Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../../../../platform/api/user/user.service";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {

  reqData = new UserRM();

  constructor(
    private matDialogRef: MatDialogRef<CreateUserDialogComponent>,
    private matSnackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.matDialogRef.close();
  }

  submit(): void {
    if (this.reqData.form.valid) {
      this.register();
    }
  }

  private register(): Subscription {
    this.reqData.startLoading();
    return this.userService.create(this.reqData)
      .pipe(finalize(() => this.reqData.endLoading()))
      .subscribe(() => {
        this.matSnackBar.open('User has been created.', 'Cancel', {
          duration: 4000,
        });
        this.matDialogRef.close(true);
      });
  }

}
