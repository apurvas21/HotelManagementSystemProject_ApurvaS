import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  // Add customer / update customer
  public addCustomer(customer: any) {
    return this.httpClient.post(`${baseUrl}/customer/save`, customer);
  }

  // Update customer
  public updateCustomer(customer: any) {
    // Extract customerId from the customer object and use it in the URL
    const customerId = customer.customerid;
    return this.httpClient.put(`${baseUrl}/customer/update/${customerId}`, customer);
  }

  // Get customer by ID
  public getCustomerById(customerId: number) {
    return this.httpClient.get(`${baseUrl}/customer/getCustomerById/${customerId}`);
  }
}
