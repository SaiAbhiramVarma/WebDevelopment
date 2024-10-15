/*Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/
var today = new Date();
var day = today.getDay();
var days_list=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is:"+days_list[day]);
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hours<12)? "AM":"PM";
hours= (hours>12)? hours-12:hours;
if (hours===0 && prepand===' PM ') 
    { 
    if (minutes===0 && seconds===0)
    { 
    hours=12;
    prepand=' Noon';
    } 
    else
    { 
    hours=12;
    prepand=' PM';
    } 
    } 
    if (hours===0 && prepand===' AM ') 
    { 
    if (minutes===0 && seconds===0)
    { 
    hours=12;
    prepand=' Midnight';
    } 
    else
    { 
    hours=12;
    prepand=' AM';
    } 
    } 
  console.log("Current Time : "+hours + prepand + " : " + minutes + " : " + seconds);