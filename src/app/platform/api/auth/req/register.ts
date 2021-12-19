import { BaseRequestModel } from "../../../modules/validation/base-request.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterRM extends BaseRequestModel {

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  getModel(): object | FormData {
    return this.form.value;
  }

}
