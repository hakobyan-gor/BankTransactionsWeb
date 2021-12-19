import { Component, OnInit } from '@angular/core';
import { finalize, Subscription } from "rxjs";
import { AuthStorage } from "../../../platform/storages/auth.storage";
import { LoginRM } from "../../../platform/api/auth/req/login";
import { AuthService } from "../../../platform/api/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reqData = new LoginRM();

  constructor(
    private authStorage: AuthStorage,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.reqData.form.valid) {
      this.login();
    }
  }

  private login(): Subscription {
    this.reqData.startLoading();
    return this.authService.login(this.reqData)
      .pipe(finalize(() => this.reqData.endLoading()))
      .subscribe((data) => {
        this.authStorage.saveTokenInStorage(data);
        location.reload();
      });
  }

}
