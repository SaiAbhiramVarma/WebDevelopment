function getMilk(money){
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    
  console.log("buy "+ calcBottles(money,1.5) + " of milk.");
    
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,1.5);
}
      
function calcBottles(startMoney,costOfBottles){
  var noOfBottles =Math.floor( startMoney/costOfBottles);
  return noOfBottles;
}

function calcChange(startMoney,costOfBottles){
  var change = startMoney%costOfBottles;
  return change;
}

console.log("Master here are your "+getMilk(5)+" change");