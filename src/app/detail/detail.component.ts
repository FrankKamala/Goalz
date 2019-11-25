import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 @Input() goal: Goal;
 @Output() isComplete = new EventEmitter<boolean>();
 goalComplete(complete:boolean){
   this.isComplete.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}
