import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  router: Router;

  constructor(private http: HttpClient, private injector: Injector) {
    this.router = this.injector.get(Router);
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  // JSON.stringify(aptitudeAnswers)
  postAptitudeAnswers(aptitudeAnswers):Observable<any>{
    return this.http.post("http://localhost:3000/postAptitudeAnswers", {
      aptitudeAnswers, 
      firstname : localStorage.getItem("firstname"),
      lastname : localStorage.getItem("lastname"),
    }, this.httpOptions)
  }
}
