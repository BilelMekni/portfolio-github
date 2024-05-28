import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;


  constructor(private formBuilder : FormBuilder , private router : Router , private contactService : ContactService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group(
      {
        name:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
        email:["",[Validators.required , Validators.email]],
        subject:["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],
        message:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(1000)]],
      }
    )
  }
    /////////Button Contact //////
    contact(){
      this.contactService.add(this.contactForm.value).subscribe(
        (data)=>{
          console.log("here contact from cv",data);
          
        }
      )
      Swal.fire({
        title: "BienVenue",
        text: "Contact Bien Recu",
        icon: "question"
      });
      this.router.navigate([""]);
    }

}
