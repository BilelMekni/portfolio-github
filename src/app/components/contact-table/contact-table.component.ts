import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  contact: any=[];

  constructor(private contactService : ContactService , private router : Router) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(
      (data)=>{
        this.contact = data.contact;
        console.log("here get all contact" , this.contact);
        
      }
    )
  }

  ////*********** BUTTON  DELATE CONTACT ********************************** */////////
  deleteContact(id:any){
    this.contactService.deleteContact(id).subscribe(
      (data)=>{
        console.log("here contact after delete",data);
        this.contactService.getContact().subscribe(
          (response)=>{
            this.contact = response.contact;
          }
        )
        
      }
    )
    

  }

}
