import { Injectable } from '@angular/core';
import { IUserModel } from "../api/user/res/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthStorage {

  private user!: IUserModel;
  private loggedIn = false;
  private readonly tokenStorageKey = 'token';

  constructor() {
  }

  getAuth(): IUserModel {
    return this.user as IUserModel;
  }

  getLoggedInState(): boolean {
    return this.loggedIn;
  }

  setAuth(user: IUserModel): void {
    this.user = user;
  }

  setLoggedInState(state: boolean): void {
    this.loggedIn = state;
  }

  logout(): void {
    localStorage.removeItem(this.tokenStorageKey);
    location.reload();
  }

  saveTokenInStorage(token: string): void {
    localStorage.setItem(this.tokenStorageKey, token);
  }

  removeTokenFromStorage(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }

  getTokenFromStorage(): string {
    return localStorage.getItem(this.tokenStorageKey) || '';
  }

}
