import { Component, OnInit, Injector } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  router : Router
  constructor(private userService : UserService, private injector:Injector) { 
    this.router = this.injector.get(Router);
  }

  user = {
    username : "",
    password : ""
  }
  
  ngOnInit() {
    this.userService.setIsValid(false);
  }

  authenticate(){
    this.userService.authenticate(this.user)
    .subscribe((res=>{
      if(res.isValid==true){
        localStorage.setItem('firstname', res.firstname);
        localStorage.setItem('lastname', res.lastname);
        localStorage.setItem('id', res.id);
        this.userService.setIsValid(true);
        this.router.navigate(['/info']);
      }else{
        alert('You have entered incorrect username or password !');
      }
    })
    )
  }
}
