/*Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
var today = new Date();
var day = today.getDay();
var month = today.getMonth()+1;
var year = today.getFullYear();
if(day<10){
    day = "0"+ day;
}
if(month<10){
    month = "0"+month;
}
console.log(month+"-"+ day+"-"+year);