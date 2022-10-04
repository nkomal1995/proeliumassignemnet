import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proelium';
  hide = true;
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(private route:Router) { }











  myForm = new FormGroup({
    userName: new FormControl('', [Validators.required ,Validators.email]),
    password: new FormControl('' ,[Validators.required,Validators.minLength(6)]),
  });


  login(){

   
    
     alert("login sucessfully");
     this.route.navigate(['/','dash']);
     
    }

}
