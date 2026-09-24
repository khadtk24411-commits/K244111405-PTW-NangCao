export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface CustomerType {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Customer[];
}