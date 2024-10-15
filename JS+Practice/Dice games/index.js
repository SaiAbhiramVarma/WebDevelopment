///dice1
var randomNumber1= Math.floor(Math.random() * 6)+1;

var radomDiceImage1="dice"+ randomNumber1+".png";

var randomImageSource="images/"+radomDiceImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);
/// dice2

var randomNumber2= Math.floor(Math.random() * 6)+1;

var radomDiceImage2="dice"+ randomNumber2+".png";

var randomImageSource2="images/"+radomDiceImage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

////Winner

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}