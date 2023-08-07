
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdmincrudService } from 'src/app/services/admincrud.service';

@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {
  public customer: any[];

  constructor(
    private admincrudService: AdmincrudService,
    private snack: MatSnackBar,
    private router: Router
  ) {
    this.customer = [];
  }

  ngOnInit(): void {
    this.getAllCustomerDetails();
  }

 
  getAllCustomerDetails() {
    this.admincrudService.getAllCustomerDetails().subscribe(
      (resp: Object) => {
        // Success
        // We need to cast the response to the correct type (any[])
        const customers = resp as any[];
        Swal.fire('Profile Displayed Successfully!');
        console.log(customers);
        this.customer = customers;
      },
      (error: any) => {
        // Error
        console.log(error);
        alert("Something went wrong!");
      }
    );
  }

  deleteCustomerDetails(customerid: number) {
    this.admincrudService.deleteCustomer(customerid).subscribe(
      (resp: any) => {
        // Success
        Swal.fire('Selected record deleted successfully!');
        console.log(resp);
        this.customer = this.customer.filter(cust => cust.customerid !== customerid);
      },
      (error: any) => {
        // Error
        console.log(error);
        alert('Something went wrong!');
      }
    );
  }

  navToUpdate(customerid: number) {
    // Navigate to the updatecustomer component with the customerid as a parameter
    this.router.navigate(['/updatecustomer', customerid]);
  }
}
