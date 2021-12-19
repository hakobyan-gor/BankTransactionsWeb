import { Injectable } from '@angular/core';
import { AuthStorage } from "../storages/auth.storage";
import { UserService } from "../api/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private userService: UserService,
    private authStorage: AuthStorage,
  ) {
  }

  async load(): Promise<any> {
    if (this.authStorage.getTokenFromStorage()) {
      const data = await this.userService.get().toPromise();
      if (data) {
        this.authStorage.setAuth(data);
        this.authStorage.setLoggedInState(true);
      }
    }
  }

}
