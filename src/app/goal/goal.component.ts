import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

     goals = Goal; //= [
    //   //new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    //   new Goal(1,'watch Finding Nemo', 'Check on Netflix', new Date( 2019,12,30)),
    //   new Goal(2, 'Buycookies' , 'Buy from Morio', new Date(2019, 12, 30)),
    //
    //   new Goal(3,'Get new Phone Case','Buy from CBD', new Date(2020,12,30)),
    //   new Goal(4,'Get Dog Food', 'Purchase from DogHouse', new Date(2019,12,29)),
    //   new Goal(5,'Solve math homework','INAUMA BUT...', new Date(2019,12,29)),
    //
    // ];


alertService:AlertService;
    toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Uko sure Hudai ku ${this.goals[index].name} ?`)
    // this.goals.splice(index,1);

    if (toDelete){
      this.goals[index].splice(index,1)
      this.alertService.alertMe("Goal Deleted Successfully")
    }
    }
  }
  //new goal come here//
  addNewGoal(goal, index){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals[index].push(goal)
}

constructor(goalService:GoalService, alertService:AlertService) {
  this.goals = goalService.getGoals()
   this.alertService = alertService;
}

  ngOnInit() {
  }

}
