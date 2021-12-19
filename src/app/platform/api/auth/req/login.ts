import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseRequestModel } from "../../../modules/validation/base-request.model";

export class LoginRM extends BaseRequestModel {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  getModel(): object {
    return {
      username: this.form.value.username,
      password: this.form.value.password,
    };
  }

}
