import { PageEvent } from '@angular/material/paginator';

export class PagingRequest {
  page = 1;
  count = 15;

  reset(): void {
    this.page = 1;
  }

  change(data: PageEvent): void {
    this.page = data.pageIndex + 1;
    this.count = data.pageSize;
  }

  getModel(): object {
    return {
      page: this.page,
      count: this.count,
    };
  }

  get path(): string {
    return `${this.page}/${this.count}`
  }

}
