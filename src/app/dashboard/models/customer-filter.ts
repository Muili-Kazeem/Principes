export interface SearchDTO {
  searchParams?: string;
  pageSize?: number | null;
  page?: number;
}

export const InitialSearchDTO = {
  searchParams: '',
  pageSize: 15,
  page: 1,
};





export interface CustomerStatusCountDTO {
  active: number;
  overdue: number;
  inactive: number;
  dormant: number;
}

export const InitialCustomerStatusCountDTO = {
  active: 0,
  overdue: 0,
  inactive: 0,
  dormant: 0,
};
