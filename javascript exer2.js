// Declaring a function named tests with the parameters test1 and test2.

function tests(test1,test2)
{
// Declaring a function greater that checks if test2 is greater than test1 and if true test1 else test2
let greater = test2>test1?test1:test2
// this returns greater
return greater

}

//Declaration of a function called coursework with a parameter cswork.
 function coursework(cswork)
 {
 
 //Function coursework is assigned to the addition of parameter cswork and function tests.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Outputting the summation of parameter cswork and function tests.
 
return coursework
 //Invoking the function coursework.
 

//Declaration of a function avg with a parameter a.
function avg(a)
{

//Assigning the function avg to the division of function coursework with parameter a.
let avg =coursework(90)/a

//Invoking the quotient after dividing the function coursework and parameter a.
return avg

}

//Declaration of a function crsmark with a parameter a.
function crsmark(a)
{
//Assigning a variable exm to the product of a function avg and the quotient of parameter a and 100.
let exm = avg(2)*(a/100)
//Invoking the product of a function avg and the qoutient of parameter a and 100.`
 return exm
}


//Declaration of a function exam with a parameter a.
function exam(a)
{

let fexam = (60/100)*a

//Invoking/returning the product between the quotient of 60/100 and parameter a.
return fexam

}


//Declaration of a function fnal without parameters.
function fnal()
{

//Assigning a variable fmark to the addition of a functions exam and crsmark
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//wrong declaration of a function fnal without parenthesis
fnal()


/**

**/
