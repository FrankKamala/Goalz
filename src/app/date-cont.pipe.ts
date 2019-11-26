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
    var dateCont =  Math.round(dateDifferenceSeconds/secondsInDay) ;

    if (dateCont >=1 && value > todayWithNoTime){
      return dateCont;
    }else{
      return 0;
    }
    /*
    let today:Date = new Date(); //get current date and time
   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
   var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
   const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
   var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
   var dateCounter = dateDifferenceSeconds/secondsInDay;

    */

  }

}
