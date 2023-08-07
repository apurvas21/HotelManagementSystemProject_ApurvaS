import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private snack: MatSnackBar, private SignupService: SignupService, private router: Router) {}
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
  //ngOnInit(): void {}
  
  formSubmit(){
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

    this.SignupService.addCustomer(this.customer).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire(this.customer.firstname + ", thank you for your successful registration.");
        Swal.fire("Rs. "+ this.customer.finalPrice + " are your room charges for " + this.customer.noOfDays + " days.");
        this.router.navigate(['/']);
      },
      (error:any)=>{
        console.log(error);
        this.snack.open('Error occured..',' ',{duration:2000});
      }
    );

    //addUser:UserService
    /* this.SignupService.addCustomer(this.customer).subscribe(
      (data)=>{
      },
      (error)=>{
      }
      
       /* (data:any)=>{
        //success
        console.log(data);
        //alert("Success");
        this.snack.open('Form submitted successfully','',{duration:5000});
        Swal.fire('successfully done!','user id is'+data.id,'success');
      },
      (error)=>{
        //error
        console.log(error);
        //alert("something went wrong");
        this.snack.open('Something went wrong', 'Ok',{duration:3000});
      } */
   // ); */
  }
  getRoomPrice(){
    return this.customer.roomPrice > 0 ? 'Rs ' + this.customer.roomPrice + '/-' : 'Please select a room type';
  }

 /*  myForm() {
    this.requiredForm = this.fb.group({
    email: ['', [Validators.required, 
       Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
    });
 } */



}
