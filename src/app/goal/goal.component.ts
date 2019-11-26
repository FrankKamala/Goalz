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
      new Goal(1,'watch Finding Nemo', 'Check on Netflix'),
      new Goal(2, 'Buycookies' , 'Buy from Morio'),

      new Goal(3,'Get new Phone Case','Buy from CBD'),
      new Goal(4,'Get Dog Food', 'Purchase from DogHouse'),
      new Goal(5,'Solve math homework','INAUMA BUT...'),

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
