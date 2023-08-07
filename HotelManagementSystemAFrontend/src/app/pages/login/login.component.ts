import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
   //constructor(private snack: MatSnackBar, private login:LoginService) {}
  constructor(private snack: MatSnackBar, private loginService:LoginService, private http:HttpClient, private router: Router) {}
  public loginData={
    username:'',
    password:'',
  }

  ngOnInit(): void {
    
  }
  login()
  {
    //console.log("login button clicked");
    console.log(this.loginData);
    //if(this.loginData.username.trim() == ''||this.loginData.username==null)
    if(this.loginData.username==''||this.loginData.username==null)
    {
      alert('Username is required!');
      //this.snack.open('Username is required!','', {duration:3000, verticalPosition: 'top', horizontalPosition:'right'});
      return;
    }
    
    //if(this.loginData.password.trim()==''||this.loginData.password==null)
    if(this.loginData.password==''||this.loginData.password==null)
    {
      alert('Password is required!');
      //this.snack.open('Password is required!','',{duration:3000});
      return;
    }

    //request to server to generate token
    /* this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);
      },
      (Error)=>{
        console.log('Error!');
        console.log(Error);
      }
    ) */

    if (this.loginData.username ==='admin' && this.loginData.password === 'admin123')
    {
      //Redirect to the admin dashboard or other admin-related pages
      Swal.fire("Admin login successfully done");
      this.router.navigate(["/dashboard"]); //redirects to dashboard
      //return ;
    } else
    {
      alert("Wrong Username or Password!")
      //this.snack.open("Invalid Credentials!");
    }
    
    //check login
    /* this.login.authenticate(th).subscribe(
      (data:any)=>{
        console.log(data);
        //alert("Success");
        this.snack.open('Form submitted successfully','',{duration:5000});
      },
      (error)=>{
        //error
        console.log(error);
        this.snack.open('error: Invalid credentials!');

      }
    ) */
  }

}

