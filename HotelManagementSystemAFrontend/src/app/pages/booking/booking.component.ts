import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingService } from 'src/app/services/booking.service';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(private snack: MatSnackBar, private BookingService: BookingService) {} //private router: Router, 
  public customer={
    countPeople :'',
    room_type :'',
    checkin :''
  }
  ngOnInit(): void {}
  
  bookingFormSubmit(){
    console.log(this.customer);
    if(this.customer.countPeople == ''||this.customer.countPeople==null){
      //alert('Count of people is required!');
      this.snack.open('Count of people is required!','OK', {verticalPosition: 'top', horizontalPosition:'right'});
      return
    }
    else{
      //Swal.fire('Booking information submitted successfully!','Success')
      Swal.fire('Booking information submitted successfully!')
    }

    //addUser:UserService
    this.BookingService.chooseroom(this.customer).subscribe(
      (data)=>{
      },
      (error)=>{
      }
    );
  }
  

}
