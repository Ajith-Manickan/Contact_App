import { Component } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { group } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contact:ContactSchema = {}
  groups:any = []

  constructor(private api:ApiService, private addContactRouter:Router)
  {
    this.contact.groupId = "select a group"
  }
  ngOnInit():void{
    this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups = response
        
      },
      error:(err:any)=>{
        console.log(err.message);
        // this.errorMsg=err.message
      }
    })
  }
  create(groupId:any)
  {
    console.log(groupId.model);
    
  }

  addContact(contact:ContactSchema)
  {
    // call api in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // data added into server
        console.log(response);
        // navigate to allContacts page
        this.addContactRouter.navigateByUrl('')
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  

}
