import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import progress Toolbar
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//import http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { DetailComponent } from './detail/detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateContPipe } from './date-cont.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    DetailComponent,
    StrikethroughDirective,
    DateContPipe,
    GoalFormComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
