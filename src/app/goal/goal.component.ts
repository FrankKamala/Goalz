import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    goals:Goal[] = [
      //new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
      new Goal(1,'watch Finding Nemo', 'Check on Netflix', new Date( 2019, 6 ,26)),
      new Goal(2, 'Buycookies' , 'Buy from Morio', new Date(2019, 6, 27)),

      new Goal(3,'Get new Phone Case','Buy from CBD', new Date(2020,1,1)),
      new Goal(4,'Get Dog Food', 'Purchase from DogHouse', new Date(2019,12,26)),
      new Goal(5,'Solve math homework','INAUMA BUT...', new Date(2019,11,29)),

    ];

    toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
    this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
