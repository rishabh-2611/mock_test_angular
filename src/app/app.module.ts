import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { routes } from "./routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AptitudeComponent } from "./aptitude/aptitude.component";
import { InfoComponent } from "./info/info.component";

import { UserService } from "./user.service";
import { QuestionsService } from "./questions.service";
import { AnswersService } from "./answers.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AptitudeComponent,
    InfoComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, routes],
  providers: [UserService, QuestionsService,AnswersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
