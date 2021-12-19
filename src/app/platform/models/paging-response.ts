export class PagingResponse<T> {
  list!: T[];
  itemsCount!: number;
  pageCount!: number;
}
