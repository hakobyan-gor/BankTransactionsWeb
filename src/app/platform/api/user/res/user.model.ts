import { Role } from "../../../enums/role";

export interface IUserModel {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  createdDate: string;
}
