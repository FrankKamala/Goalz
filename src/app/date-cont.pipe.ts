import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCont'
})
export class DateContPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date (); //get the date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)//MILISECONDS
    const secondsInDay = 86400;//secs* mins*24hours
    var dateDifferenceSeconds = dateDifference * 0.001; //miiliseconds to seconds
    var dateCont = dateDifferenceSeconds / secondsInDay ;

    if (dateCont >=1 && value >todayWithNoTime){
      return dateCont;
    }else{
      return 0;
    }

  }

}
