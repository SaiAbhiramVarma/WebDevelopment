function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Your BMI is " + (Math.round(bmi * 10) / 10) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + (Math.round(bmi * 10) / 10) + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + (Math.round(bmi * 10) / 10) + ", so you are overweight.";
  }
}

var message = bmiCalculator(65, 1.8);
console.log(message);