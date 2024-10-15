//Q1
var tweet = prompt("Compose your tweet");
var tweetCount= tweet.length;//length
alert("you have written " + tweetCount +" characters you have "+ (140-tweetCount)+" remaining");

//Q2
var tweet1 = prompt("Compose your tweet");
var tweetSlice1 = tweet1.slice(0,140);//slice
alert(tweetSlice1);

//Q3
var name = "Abhiram";
name = name.toUpperCase(0,7);//UpperCase
alert(name);
name = name.toLowerCase(0,7);//LowerCase
alert(name);

//Q4
var a = prompt("Enter your name");
var b = a.slice(0,1);// first letter
var c = a.slice(1);// remaining letters
var d = c.toLowerCase();
var e = b.toUpperCase();
alert("Hello " +e+d);



