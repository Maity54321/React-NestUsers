export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  companyWebsite: string;
  companyName: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
  state: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  companyWebsite: string;
  companyName: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
  state: string;
}

export interface IPagination {
  pageIndex: number;
  itemPerPage: number;
}
