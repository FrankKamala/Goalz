import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { DetailComponent } from './detail/detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateContPipe } from './date-cont.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    DetailComponent,
    StrikethroughDirective,
    DateContPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
