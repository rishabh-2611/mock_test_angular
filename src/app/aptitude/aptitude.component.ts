import { Component, OnInit, Injector } from "@angular/core";
import { UserService } from "../user.service";
import { QuestionsService } from "../questions.service";
import { AnswersService } from "../answers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-aptitude",
  templateUrl: "./aptitude.component.html",
  styleUrls: ["./aptitude.component.css"]
})
export class AptitudeComponent implements OnInit {
  router: Router;

  constructor(
    private injector: Injector,
    private userService: UserService,
    private questionsService: QuestionsService,
    private answersService: AnswersService
  ) {
    this.router = this.injector.get(Router);
  }

  private current: any;
  private countdown: any;
  private timer: any;
  private distance: any;
  private aptitudeQuestions: any;
  private aptitudeAnswers: any;

  ngOnInit() {
    this.userService.isValidUser();
    this.countdown = new Date().getTime() + 1200000;
    this.countdownTimer();
    this.aptitudeQuestions = this.questionsService.getAptitudeQuestions();
    this.aptitudeAnswers = new Array(20);
  }

  countdownTimer() {
    var x = setInterval(() => {
      this.current = new Date().getTime();
      this.distance = this.countdown - this.current;

      var minutes = Math.floor(
        (this.distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      this.timer = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

      if (this.timer == "00:00") {
        alert("Time's up !");
        clearInterval(x);
      }
    }, 1000);
  }

  onNextSectionClicked() {
    alert("Please complete the current section first");
  }

  onItemChange(index, value) {
    this.aptitudeAnswers[index] = value;
  }

  onSubmit() {
    this.answersService
      .postAptitudeAnswers(this.aptitudeAnswers)
      .subscribe(res => {
        if (res == true) {
          this.userService.setIsAptitudeGiven().subscribe(res => {
            if (res == true) {
              this.router.navigate(["/info"]);
            } else {
              alert("Please try again !");
            }
          });
        }
      });
  }
}
