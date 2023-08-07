import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public authenticate(username:any, password:any)
  {
    if(username=="admin" && password=="admin123")
    {
      sessionStorage.setItem('username', username)
      //Swal.fire('Login successful.');
      return true;
    }
    else{
      //Swal.fire('Enter correct credentials!');
      return false;
    }
  }
  isUserloggedin()
  {
    let user=sessionStorage.getItem('username');
    console.log(!(user==null));
    return !(user==null)
  }

  logout()
  {
    sessionStorage.removeItem('username')
  }
}
