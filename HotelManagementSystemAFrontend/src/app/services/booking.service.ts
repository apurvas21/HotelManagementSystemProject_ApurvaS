import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

   //add record
   public chooseroom(room:any)
   {
       return this.http.post(`${baseUrl}/room/`,room)
   }
}