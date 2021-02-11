export interface ResponseWrapper<T> {
  data: T;
  page: number;
  per_page: number;
  support: any;
  total: number;
  total_pages: number;
}
