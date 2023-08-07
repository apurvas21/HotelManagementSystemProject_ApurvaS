import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';
import { ActivatedRoute } from '@angular/router';

import { numbers } from '@material/snackbar';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent {
  constructor(private snack: MatSnackBar, private SignupService: SignupService, private router: Router, private route: ActivatedRoute) {}
  public customer={
    username :'',
    password :'',
    firstname :'',
    lastname :'',
    phoneno :'',
    email :'',
    address:'',
    city:'',
    countPeople:'',
    checkin: new Date(),
    checkout: new Date(),
    noOfDays:0,
    roomType :'',
    roomPrice: 0,
    finalPrice: 0
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id'];
      this.getCustomerById(customerId);
    });
  }

  getCustomerById(customerId: number) {
    this.SignupService.getCustomerById(customerId).subscribe(
      (resp: any) => {
        // Success
        this.customer = resp;
        console.log(this.customer);
      },
      (error: any) => {
        // Error
        console.log(error);
        alert("Something went wrong!");
      }
    );
  }
  
  
  
  formUpdate(){
    console.log(this.customer);
    if(this.customer.username == ''||this.customer.username==null){
      //alert('Username is required!');
      this.snack.open('Username is required!','OK', {verticalPosition: 'top', horizontalPosition:'right'});
      return;
    }
    if(this.customer.password == ''||this.customer.password==null){
      this.snack.open('Password is required!','OK', {verticalPosition: 'top', horizontalPosition:'right'});
      return;
    }


    const checkInTime = this.customer.checkin.getTime();
    const checkOutTime = this.customer.checkout.getTime();
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    this.customer.noOfDays = Math.ceil((checkOutTime - checkInTime) / oneDay);

    if(this.customer.roomType=='AC Room')
    {
      this.customer.roomPrice=3000;
    }
    if(this.customer.roomType=='Deluxe Room')
    {
      this.customer.roomPrice=4500;
    }
    if(this.customer.roomType=='Executive')
    {
      this.customer.roomPrice=6999;
    }
    if(this.customer.roomType=='Professional Suite')
    {
      this.customer.roomPrice=9500;
    }

    // Calculate final price
    this.customer.finalPrice = this.customer.roomPrice * this.customer.noOfDays;

    // //update customer
    this.SignupService.updateCustomer(this.customer).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire(this.customer.firstname + "'s data has been successfully updated.");
        Swal.fire("Rs. "+ this.customer.finalPrice + " are the updated room charges for " + this.customer.noOfDays + " days.");
        this.router.navigate(['/']);
      },
      (error:any)=>{
        console.log(error);
        this.snack.open('Error occured..',' ',{duration:2000});
      }
    );
  }
  getRoomPrice(){
    return this.customer.roomPrice > 0 ? 'Rs ' + this.customer.roomPrice + '/-' : 'Please select a room type';
  }

}
