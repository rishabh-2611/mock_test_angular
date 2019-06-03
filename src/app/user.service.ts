import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  router : Router;

  constructor(private http : HttpClient, private injector:Injector) {
    this.router = this.injector.get(Router);
   }

  private isValid = false;  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  ngOnInit(){}

  setIsValid(isValid){
    this.isValid = isValid;
  }

  getIsValid(){
    return this.isValid;
  }

  setIsAptitudeGiven(){
    return this.http.post("http://localhost:3000/setIsAptitudeGiven", {
      id : localStorage.getItem("id")
    } ,this.httpOptions);
  }
W
  getIsAptitudeGiven(){
    return this.http.post("http://localhost:3000/getIsAptitudeGiven", {
      id : localStorage.getItem("id")
    }, this.httpOptions);
  }

  setIsProgrammingConceptsGiven(isProgrammingConceptsGiven){
    // this.isProgrammingConceptsGiven = isProgrammingConceptsGiven;
  }

  getIsProgrammingConceptsGiven(){
    // return this.isProgrammingConceptsGiven;
    return true;
  }

  setIsCodingGiven(isCodingGiven){
    // this.isCodingGiven = isCodingGiven;
  }

  getIsCodingGiven(){
    // return this.isCodingGiven;
  }

  authenticate(user):Observable<any>{
    return this.http.post("http://localhost:3000/authenticate", JSON.stringify(user), this.httpOptions)
  }

  isValidUser(){
    if(this.getIsValid()==false){
      // this.router.navigate(['']);
    }
  }
}