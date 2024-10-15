var guestList = ["Abhi","Ram","Varma","Sai"];
var guestName = prompt("what is your name?");
if(guestList.includes(guestName)){
    alert("Your welcome "+guestName);
}
else{
    alert("Sorry maybe next time "+guestName);
}