import { Role } from "../../../enums/role";

export interface IRegisterResponseModel {
  token: string;
  role: Role;
}
