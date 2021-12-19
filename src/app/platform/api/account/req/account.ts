import { BaseRequestModel } from "../../../modules/validation/base-request.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AccountRM extends BaseRequestModel {

  form = new FormGroup({
    currency: new FormControl(null, [Validators.required]),
  });

  getModel(): object | FormData {
    return this.form.value;
  }

}
