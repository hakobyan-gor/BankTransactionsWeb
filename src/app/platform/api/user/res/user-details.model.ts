import { Role } from "../../../enums/role";
import { IAccountModel } from "../../account/res/account.model";

export interface IUserDetailsModel {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  createdDate: string;
  accounts: IAccountModel[];
}
