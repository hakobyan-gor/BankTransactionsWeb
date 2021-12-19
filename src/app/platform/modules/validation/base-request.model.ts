import { FormGroup } from '@angular/forms';
import { FormErrorStateMatcher } from "./form-error-state-matcher";

export abstract class BaseRequestModel {

  abstract form: FormGroup;

  readonly matcher = new FormErrorStateMatcher();

  inProgress = false;

  startLoading(): void {
    this.inProgress = true;
  }

  endLoading(): void {
    this.inProgress = false;
  }

  abstract getModel(): object | FormData;

}
