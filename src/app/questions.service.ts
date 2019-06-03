import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  router: Router;

  private aptitudeQuestions = false;
  private programmingQuestions = false;

  constructor(private http: HttpClient, private injector: Injector) {
    this.router = this.injector.get(Router);
    this.fetchAptitudeQuestions();

    this.storeAptitudeQuestions();
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  
  setAptitudeQuestions(aptitudeQuestions) {
    this.aptitudeQuestions = aptitudeQuestions.aptitude;
    console.log(this.aptitudeQuestions);
  }

  getAptitudeQuestions() {
    return this.aptitudeQuestions;
  }



  setProgrammingQuestions(programmingQuestions) {
    this.programmingQuestions = programmingQuestions;
    console.log(programmingQuestions)
  }

  getProgrammingQuestions() {
    return this.programmingQuestions;
  }



  storeAptitudeQuestions() {
    this.fetchAptitudeQuestions().subscribe(aptitudeQuestions => {
      this.setAptitudeQuestions(aptitudeQuestions);
    });
  }

  storeProgrammingQuestions() {
    this.fetchProgrammingQuestions().subscribe(programmingQuestions => {
      this.setProgrammingQuestions(programmingQuestions);
    });
  }



  fetchAptitudeQuestions(): Observable<any>  {
    return this.http.get("http://localhost:3000/getAptitudeQuestions", this.httpOptions)
      // .pipe(map(data => this.setAptitudeQuestions(data)));
  }

  fetchProgrammingQuestions(): Observable<any> {
    return this.http.get("http://localhost:3000/getProgrammingQuestions", this.httpOptions)
      // .pipe(map(data => this.setProgrammingQuestions(data)));
  }
}
