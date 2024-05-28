import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl : string="http://localhost:3009/contact";

  constructor(private http : HttpClient) { }
  /////////////ADD CONTACT ////////////////
  add(obj:any){
    return this.http.post<{message : string , isadded : boolean}>(this.contactUrl,obj);
  }
   /////////////GET ALL CONTACT ////////////////
   getContact(){
    return this.http.get<{contact : any}>(`${this.contactUrl}/contact/all`);
  }
     /////////////DELETE CONTACT ////////////////
  deleteContact(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.contactUrl}/${id}`);
  }

}
