import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aftersignup',
  templateUrl: './aftersignup.component.html',
  styleUrls: ['./aftersignup.component.css']
})
export class AftersignupComponent {
  constructor(private Aftersignup: AftersignupComponent, private router: Router){}
  ngOnInit(): void {}

  bookingclick(){
    this.router.navigate(["/booking"]);
  }
}
