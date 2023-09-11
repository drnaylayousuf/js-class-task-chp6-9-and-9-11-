// CLASS WORK OF CHAPTER 6-9
// MATH EXPRESSIONS

// Q1 ANSWER

// document.write("Result: <br>");

// var a =10;
// document.write("The value of a is " +  a + "<br>..................................<br<br><br>" );

// var result = ++a;
//  document.write(" <br><br<br><br>the value of ++a is:" + a);
//  document.write("<br>The value of a is:" + result  + "<br><br<br><br><br<br><br>" );


// // 

// document.write("The value of a++ is: " + a + "<br>");
// var result = a++;
// document.write( "Now the value of a++ is: " + a) ;

// // 

// var result = --a;
//  document.write(" <br><br<br><br>the value of --a is:" + a);
//  document.write("<br>The value of a is:" + result  + "<br><br<br><br><br<br><br>" );

// //  

//  document.write("The value of a-- is: " + a + "<br>");
//  var result = a--;
//  document.write( "Now the value of a is: " + a + "<br> <br><br><br><br>") ;



// // Q2 ANSWER

// var a = 2;
// document.write("a is: " + a + "<br>");

// var b = 1;
// document.write("b is: " + b + "<br><br>" );


// explain  (--a)
//  var result = --a ;
//  console.log(result);
//                 //    answer (1)

// // Explain  (--a)- (--b)      
//                 //    (1) - (0) 

//  var b = 1;
// var result1 = --b ;
//   console.log(result1);
//             //     answer (0)
// console.log(result - result1);
//                     //  answer (1)

// //  explain   (--a) - (--b) + ++b;
//             //  (1) - (0) + (2) 
// var b = 1;

// var result2 = ++b;

//  console.log(result2);

// console.log(result - result1 + result2); 
// //                  answer (3)            


//  explain   --a - --b + ++b + b--;

// var b = 1 ;
//  var result3 = b-- ;

//  console.log(result3);
// console.log(b);

// console.log(result - result1 + result2 + result3);

// document.write("Result is: " );
// document.write( result - result1 + result2 + result3);


// Q3   ANSWER

// var  userName = prompt( "Enter your name" );

// alert ("hello,"+ userName +  "!");




// Q5  ANSWER


// Prompt the user to enter a number
// var  number = prompt("Enter a number");

// Convert the input to a number
// number = Number(number);

// Check if the input is a valid number
// if (isNaN(number)) {
  // If not, use 5 as the default number
  // number = 5;
// }

// Create an empty string to store the table
// var  table = "";

// // Loop from 1 to 10
// for (let i = 1; i <= 10; i++) {
  // Append each row of the table to the string
  // table += number + " x " + i + " = " + (number * i) + "\n";
// }

// Display the table on the browser
// document.write("<pre>" + table + "</pre>");

//          another one / way

// Take input a number from user
// var number = Number(prompt("Enter a number:"));

// // If user does not enter a new number, multiplication table of 5 should be displayed by default.
// if (isNaN(number) || number === 0) {
//   number = 5;
// }

// // Display its multiplication table on your browser
// document.write("<h1>Multiplication Table of " + number + "</h1>");
// document.write("<table border='1'>");
// for (var i = 1; i <= 10; i++) {
//   document.write("<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>");
// }
// document.write("</table>");


// Q6 ANSWER

// var subject1 = prompt("Enter first subject name");
// var subject2 = prompt("Enter second subject name");
// var subject3 = prompt("Enter third subject name");

// var totalMarks = 100;

// var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 );
// var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 );
// var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 );

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// var percentage = (totalObtainedMarks / (totalMarks * 3) )* 100;



//             another way 


// a) Take three subjects name from user and store them in 3 different variables.
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // c) Take obtained marks for first subject from user and stored it in different variable.
// var marks1 = Number(prompt("Enter the obtained marks for " + subject1 + ":"));

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// var marks2 = Number(prompt("Enter the obtained marks for " + subject2 + ":"));
// var marks3 = Number(prompt("Enter the obtained marks for " + subject3 + ":"));

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var totalObtained = marks1 + marks2 + marks3;
// var percentage = (totalObtained / (totalMarks * 3)) * 100;

// document.write("<table border='1'>");
// document.write("<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarks) * 100 + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarks) * 100 + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarks) * 100 + "%</td></tr>");
// document.write("<tr><td></td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");



          
// .................................THE END.................................

