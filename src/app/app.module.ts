import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { DetailComponent } from './detail/detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateContPipe } from './date-cont.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    DetailComponent,
    StrikethroughDirective,
    DateContPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
