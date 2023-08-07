import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdmincrudService {

  constructor(private httpClient:HttpClient) { }

  //get/retrieve customer details
  public getAllCustomerDetails()
  {
   return this.httpClient.get(`${baseUrl}/customer/getAllCustomers`);
  }

  //delete record
  public deleteCustomer(customerid: number)
  {
    return this.httpClient.delete(`${baseUrl}/customer/deleteCustomer/${customerid}`);
  }

  // //update record
  // public updateCustomer(customer:any)
  // {
  //   return this.httpClient.put(`${baseUrl}/customer/update`, customer);
  // }
}
