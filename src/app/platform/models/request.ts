import { ITransformParams } from "../modules/http/interfaces";

export class Request {

  success!: boolean;
  data: any;
  message!: string;

  constructor(data: any, params?: ITransformParams) {
    if (params) {
      if (params.parse) {
        this.data = data.data;
      }
    } else {
      this.data = data;
      this.success = data.success;
    }
  }
}
