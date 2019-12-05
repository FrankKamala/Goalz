import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Quote } from '../quote-class/quote';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

      //= [
    //   //new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    //   new Goal(1,'watch Finding Nemo', 'Check on Netflix', new Date( 2019,12,30)),
    //   new Goal(2, 'Buycookies' , 'Buy from Morio', new Date(2019, 12, 30)),
    //
    //   new Goal(3,'Get new Phone Case','Buy from CBD', new Date(2020,12,30)),
    //   new Goal(4,'Get Dog Food', 'Purchase from DogHouse', new Date(2019,12,29)),
    //   new Goal(5,'Solve math homework','INAUMA BUT...', new Date(2019,12,29)),
    //
    // ];

goals:Goal[];
alertService:AlertService;
quote:Quote;
    toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Uko sure Hudai ku ${this.goals[index].name} ?`)
    // this.goals.splice(index,1);

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal Deleted Successfully")
    }
    }
  }
  //new goal come here//
  addNewGoal(goal, index){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}

constructor(goalService:GoalService, alertService:AlertService,private http:HttpClient) {
  this.goals = goalService.getGoals()
   this.alertService = alertService;
}

  ngOnInit() {
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      //succesful ApI request
      this.quote = new Quote(data.author , data.quote)
    },err=>{
      this.quote=new Quote("Rekless","Yes Bana")
      console.log("Buda Uko nA eRROR")
    })


  }

}
