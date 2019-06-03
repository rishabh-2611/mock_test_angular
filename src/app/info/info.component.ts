import { Component, OnInit, Injector } from "@angular/core";
import { UserService } from "../user.service";
import { QuestionsService } from "../questions.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  router: Router;
  constructor(
    private userService: UserService,
    private questionsService: QuestionsService,
    private injector: Injector
  ) {
    this.router = this.injector.get(Router);
  }
  private current: any;
  private countdown: any;
  private timer: any;
  private distance: any;
  private isTimeUp = false;
  private isAgree = false;
  private isStartButtonEnable = false;

  private isAptitudeGiven = false;
  private isProgrammingConceptsGiven = false;
  private isCodingGiven = false;

  ngOnInit() {
    this.userService.isValidUser();
    this.getQuestions();

    this.countdown = new Date().getTime() + 5000;
    this.countdownTimer();
  }

  getQuestions() {
    if (this.userService.getIsProgrammingConceptsGiven()) {
      // this.getAptitudeQuestions();
    } else if (this.userService.getIsAptitudeGiven()) {
      this.getProgrammingQuestions();
    }else {
      this.getAptitudeQuestions();
    }
  }

  onAgreeChecked() {
    this.isAgree = !this.isAgree;
    if (this.isTimeUp == true && this.isAgree == true) {
      this.isStartButtonEnable = true;
    } else {
      this.isStartButtonEnable = false;
    }
  }

  onStartButtonClicked() {
    if (this.userService.getIsProgrammingConceptsGiven()) {
      // this.router.navigate(["/aptitude"]);
    } else if (this.isAptitudeGiven == true) {
      // this.router.navigate(["/aptitude"]);
    } else {
      this.router.navigate(["/aptitude"]);
    }
  }

  getIsAptitudeGiven() {
    this.userService.getIsAptitudeGiven()
    .subscribe((res=>{
      if(res == true){
        this.isAptitudeGiven = true;
      }
    })
    )
  }

  getAptitudeQuestions() {
    this.questionsService.storeAptitudeQuestions();
  }

  getProgrammingQuestions() {
    this.questionsService.storeProgrammingQuestions();
  }

  countdownTimer() {
    var x = setInterval(() => {
      this.current = new Date().getTime();
      this.distance = this.countdown - this.current;

      var minutes = Math.floor(
        (this.distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      this.timer =
        "Please Wait : " +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

      if (this.timer == "Please Wait : 00:00") {
        this.timer = "";
        this.isTimeUp = true;
        if (this.isAgree == true) {
          this.isStartButtonEnable = true;
        }
        clearInterval(x);
      }
    }, 1000);
  }
}
