// CLASS WORK OF CHAPTER 9-11
// USER INPUT & CONDITIONAL STATEMENT

// CHAPTER 1
// Q1  ANSWER

// var city = prompt("Where do you live");
// if(city === "karachi"){
// alert("Welcome To City OF Light...");
// }

// Q2
// var Gender = prompt("Enter your Gender");
// var message = "";
// if(Gender === "Male"){
//     message= "Good Morning sir";
// }
// else if(Gender === "Female"){
//     message= "Good Morning Ma'am";
// }
// else{
//     alert("Sorry");
// }
// alert(message);

// Q3
// var trafic = prompt("Enter Color Of Traffic Signal");
// if(trafic === "Red"){
//     alert("Must Stop");
// }
// else if(trafic === "Yellow"){
//     alert("Ready to move");
// }
// else if(trafic === "green"){
//     alert("Move Now");
// }
// else{
//     alert(" there is No Signal");
// }


// Q4
// var fuel = +prompt("Enter your Current Fuel");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
    //  another way /another one 


    // var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car "));

//     if (remainingFuel < 0.25) {
//         alert("Please refill the fuel in your car");
//     } else {
//         alert("You have enough fuel. Have a safe journey!");
//     }



// Q5     
// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.
// 
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// C.

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// D.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// E.

//    if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
    

// F.

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


//   Q6 ANSWER 

// function calculatePercentage(marksObtained, totalMarks) {
//     return (marksObtained / totalMarks) * 100;
// }

// function assignGrade(percentage) {
//     if (percentage >= 90) {
//         return 'A+';
//     } else if (percentage >= 80) {
//         return 'A';
//     } else if (percentage >= 70) {
//         return 'B';
//     } else if (percentage >= 60) {
//         return 'C';
//     } else if (percentage >= 50) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }




// function displayResult(subjects, marks, totalMarks) {
//     const totalObtained = marks.reduce((total, mark) => total + mark, 0);
//     const percentage = calculatePercentage(totalObtained, totalMarks);
//     const grade = assignGrade(percentage);

//     console.log(`Total Marks: ${totalMarks}`);
//     console.log(`Marks Obtained: ${totalObtained}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
//     console.log(`Grade: ${grade}`);

//     if (grade === 'F') {
//         console.log("Remarks: Fail");
//     } else {
//         console.log("Remarks: Pass");
//     }
// }


// const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
// const marks = [];

// for (const subject of subjects) {
//     const marksObtained = parseFloat(prompt(`Enter marks obtained in ${subject}:`));
//     marks.push(marksObtained);
// }

// const totalMarks = parseFloat(prompt("Enter total marks:"));

// displayResult(subjects, marks, totalMarks);





//  Q7 ANSWER  

// // Store a secret number (ranging from 1 to 10) in a variable
// var  secret = Math.floor(Math.random() * 10) + 1;
// var secret = 7;
// // Prompt user to guess the secret number
// var guess = prompt("Guess the secret number (from 1 to 10)");

// // Convert the input to a number
//  var guess = Number(guess);

// // Check if the user guesses the same number
// if (guess === secret) {
  // Show “Bingo! Correct answer”
//   alert("Bingo! Correct answer");
// } else if (guess + 1 === secret) {
//   // Show “Close enough to the correct answer”
//   alert("Close enough to the correct answer");
// } else {
//   // Show “Sorry, wrong answer”
//   alert("Sorry, wrong answer");
// }

      //  another one /way

      // var secretNumber = Math.floor(Math.random() * 10) + 1;  
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert(`Sorry, the correct answer was ${secretNumber}. Try again next time.`);
// }


// Q8 ANSWER

// Prompt the user to enter a number

// var  number = prompt("Enter a number");

// Convert the input to a number

// var number = Number(number);

// Check if the number is divisible by 3
// if (number % 3 === 0) {
//   // Show the message if the number is divisible by 3
//   alert("The number is divisible by 3");
// } else {
//   // Show the message if the number is not divisible by 3
//   alert("The number is not divisible by 3");
// }

      //   another one /way

      // var number = parseInt(prompt("Enter a number:"));
      //     if (number % 3 === 0) {
      //         console.log("The number" + number  +"is divisible by 3.");
      //     } else {
      //         console.log("The number" + number + "is not divisible by 3.");
      //     }
      // alert(number);
      



// Q9  ANSWER  

// Get the input from the user
// var num = prompt("Enter a number: ");

// // Check if the number is even or odd
// if (num % 2 == 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }

  //  another one / way
  
// var number = parseInt(prompt("Enter a number:"));
// if(number %2===0){
//     console.log("the no is even");
// }
// if(number %2===1){
//     console.log("the no is odd");
// }
// else{
//     alert("invalid");
// }


// Q10  ANSWER

// Prompt the user to enter the temperature
// var  temperature = prompt("Enter the temperature");

// // Convert the input to a number
//  var temperature = Number(temperature);

// // Show a message based on the temperature
// if (temperature > 40) {
//   // Show the message if the temperature is greater than 40
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   // Show the message if the temperature is between 31 and 40
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   // Show the message if the temperature is between 21 and 30
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   // Show the message if the temperature is between 11 and 20
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   // Show the message if the temperature is less than or equal to 10
//   alert("It is very cold outside.");
// }

      //       another way

      // var temperature=+prompt("Enter the temperature");
// if(temperature> 40){
//     console.log("It is too hot outside.")
// }
// else if(temperature>30){
//     console.log("The Weather today is Normal.")
// }
// else if(temperature>20){
//     console.log("Today’s Weather is cool.")
// }
// else if(temperature>10){
//     console.log("OMG! Today’s weather is so Cool.")
// }
// else{

//     alert("invalid temperature");
// }

// Q11 ANSWER

// var firstNum =  +prompt("Enter first number");
// var secondNum = +prompt("Enter second number");
// var operation = prompt("Enter your desired operation");

// if(operation ==="+"){
//     alert(firstNum + secondNum);
// }

// else if(operation ==="-"){
//     alert(firstNum - secondNum);
// }

// else if(operation ==="*"){
//     alert(firstNum * secondNum);
// }

// else if(operation ==="/"){
//     alert(firstNum / secondNum);
// }

// else if(operation ==="%"){
//     alert(firstNum % secondNum);
// }
   
//   another way

// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;


// if (operation === '+') {
//     result = num1 + num2;
// } else if (operation === '-') {
//     result = num1 - num2;
// } else if (operation === '*') {
//     result = num1 * num2;
// } else if (operation === '/') {
//     result = num1 / num2;
// } else if (operation === '%') {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, or %.");
// }

// if (result !== undefined) {
//     alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
//  }




//               ......................THE END.......................