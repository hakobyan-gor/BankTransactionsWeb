export class HandledError {
  private readonly defaultErrorMessage = 'Something went wrong';
  text!: string;
  status = 200;

  constructor(err: any) {
    try {
      this.text = err.message;
    } catch (e) {
      this.text = this.defaultErrorMessage;
    }
  }
}
